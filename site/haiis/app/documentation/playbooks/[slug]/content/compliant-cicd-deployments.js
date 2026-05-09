export const meta = {
  title: 'Compliant AI Deployments with CI/CD and Infrastructure as Code',
  subtitle: 'A step-by-step playbook for repeatable, auditable infrastructure deployments in regulated environments',
  author: 'Kaizad Wadia',
  published: 'December 18, 2023',
  source: 'Builder Hub',
  sourceUrl: 'https://community.aws/content/2dquEzIKfm2wVH77AYmApToZdWj/gitlab-with-terraform',
  clouds: ['AWS'],
  previewImage: '/img/blogs/streamlinedeployments.webp',
};

export default function Content() {
  return (
    <>
      <p>
        Deploying infrastructure manually is time-consuming and prone to errors. Manual processes rely on humans
        repeating the same tasks without validation checks, leading to configuration drift, inconsistencies, and
        undocumented changes. In regulated healthcare environments, this is especially problematic: every
        infrastructure change needs to be traceable, repeatable, and auditable. CI/CD pipelines with
        infrastructure as code address all three requirements at once.
      </p>
      <p>
        In this post, we walk through setting up a CI/CD pipeline that automates cloud infrastructure deployments
        using <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a> and Terraform.
        The same principles apply to GitHub Actions, Azure DevOps, or any other pipeline tool. The goal is a
        deployment process where every change is version-controlled, every run is logged, and no human needs
        direct console access to production environments.
      </p>

      <h2>Overview</h2>
      <p>
        The approach has three parts. First, we write a Terraform script to define the infrastructure and a
        pipeline configuration file to execute it on commit. Second, we configure identity federation so the
        pipeline can authenticate to the cloud provider without storing long-lived credentials. Third, we set up
        remote state management so Terraform can track what has been deployed and prevent concurrent conflicting
        changes.
      </p>
      <p>
        By the end, you will have an automated deployment pipeline where pushing code to the main branch
        triggers a Terraform plan and apply, with full logs available for audit. No manual steps, no shared
        credentials, no configuration drift.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>A <a href="https://aws.amazon.com/resources/create-account/" target="_blank" rel="noopener noreferrer">cloud account</a> with appropriate permissions</li>
        <li>A <a href="https://gitlab.com/-/trial_registrations/new" target="_blank" rel="noopener noreferrer">GitLab account</a> (free tier is sufficient)</li>
        <li>Approximately 45 minutes</li>
      </ul>

      <h2>Walkthrough</h2>

      <h3>Step 1: Build the Repository</h3>
      <p>
        Create a new GitLab repository to store the Terraform configuration. In GitLab, click New project, then
        Create blank project. Give it a name such as <code>my-terraform-queue</code>. Once created, open the
        Web IDE from the Edit dropdown on the repository home page.
      </p>
      <img src="/img/blogs/inline/cicd-create-repo.png" alt="Creating a new GitLab repository" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <img src="/img/blogs/inline/cicd-web-ide.png" alt="GitLab Web IDE" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        Create a file called <code>main.tf</code> and add a minimal resource definition to start with:
      </p>
      <pre><code>{`resource "aws_sqs_queue" "queue" {
  name = "sample-queue"
}`}</code></pre>
      <p>
        Commit this to the main branch. We will expand this file later. For now, the focus is on getting the
        pipeline and permissions in place first.
      </p>

      <h3>Step 2: Configure an Identity Provider</h3>
      <p>
        Rather than storing cloud credentials as pipeline secrets, we use OpenID Connect (OIDC) to let the
        pipeline authenticate directly with the cloud provider. This is the recommended approach for regulated
        environments: no long-lived credentials to rotate, no secrets to leak, and a full audit trail of which
        pipeline run assumed which role.
      </p>
      <p>
        In the IAM console, navigate to Identity Providers and add a new provider. Select OpenID Connect and
        set the provider URL to <code>https://gitlab.com</code> and the audience to <code>https://gitlab.com</code>.
        Click Get thumbprint to retrieve the certificate fingerprint — the{' '}
        <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html" target="_blank" rel="noopener noreferrer">OIDC thumbprint page in the AWS documentation</a>{' '}
        describes how this is obtained. Then save the provider.
      </p>
      <img src="/img/blogs/inline/cicd-add-idp.png" alt="Configuring GitLab as an OIDC identity provider in IAM" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />

      <h3>Step 3: Create an IAM Role for the Pipeline</h3>
      <p>
        Create an IAM role that the pipeline will assume. Under trusted entity, select Web identity and choose
        the GitLab identity provider created in the previous step. Attach only the permissions the pipeline
        needs. For this example, that is access to S3, DynamoDB, and SQS.
      </p>
      <img src="/img/blogs/inline/cicd-iam-role.png" alt="Configuring the IAM role trusted entity for GitLab CI" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        After creating the role, edit its trust policy to scope it to a specific repository and branch. This
        ensures only pipelines running on the main branch of your specific repository can assume the role.
        For more detail, see the{' '}
        <a href="https://docs.gitlab.com/ee/ci/cloud_services/aws/" target="_blank" rel="noopener noreferrer">GitLab documentation on CI/CD cloud services for AWS</a>:
      </p>
      <pre><code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::{AWS_ACCOUNT_ID}:oidc-provider/gitlab.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringLike": {
          "gitlab.com:sub": "project_path:{GITLAB_GROUP}/{GITLAB_PROJECT}:ref_type:branch:ref:main"
        }
      }
    }
  ]
}`}</code></pre>
      <p>
        Note the role ARN. It will be stored as a pipeline variable in the next step.
      </p>

      <h3>Step 4: Set Up Remote State Management</h3>
      <p>
        Terraform tracks deployed infrastructure in a state file. Storing this file locally is not viable for
        team environments or automated pipelines. Remote state in an object storage bucket solves this, and a
        database table provides state locking to prevent two pipeline runs from modifying infrastructure
        simultaneously.
      </p>
      <p>
        Create an S3 bucket with a globally unique name such as <code>terraform-state-bucket-XXXX</code> and
        enable{' '}
        <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html" target="_blank" rel="noopener noreferrer">server-side encryption (SSE-S3)</a>.
        Then create a DynamoDB table named <code>terraform-state-lock-table</code> with a partition key of{' '}
        <code>LockID</code> (string type). Both resources should be in the same region.
      </p>
      <img src="/img/blogs/inline/cicd-s3-bucket.png" alt="Creating the S3 bucket for Terraform state" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <img src="/img/blogs/inline/cicd-dynamodb-table.png" alt="Creating the DynamoDB table for state locking" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />

      <h3>Step 5: Write the Pipeline Configuration</h3>
      <p>
        In the GitLab repository settings, add two CI/CD variables: <code>ROLE_ARN</code> set to the role ARN
        from Step 3, and <code>AWS_DEFAULT_REGION</code> set to your target region.
      </p>
      <img src="/img/blogs/inline/cicd-gitlab-variable.png" alt="Adding CI/CD variables in GitLab" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        Create a <code>.gitlab-ci.yml</code> file in the repository root. The pipeline uses{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html" target="_blank" rel="noopener noreferrer">AWS CLI profiles</a>{' '}
        to keep credentials separate and switch between them easily:
      </p>
      <pre><code>{`stages:
  - deploy

deploy:
  stage: deploy
  only:
    - main
  image:
    name: hashicorp/terraform:light
    entrypoint: [""]
  id_tokens:
    GITLAB_OIDC_TOKEN:
      aud: https://gitlab.com
  before_script:
    - echo "\${GITLAB_OIDC_TOKEN}" > /tmp/web_identity_token
    - mkdir ~/.aws
    - echo -e "[profile oidc]\\nrole_arn=\${ROLE_ARN}\\nweb_identity_token_file=/tmp/web_identity_token" >> ~/.aws/config
  script:
    - terraform init
    - terraform apply -auto-approve`}</code></pre>
      <p>
        The pipeline runs only on commits to main, uses the Terraform Docker image, and authenticates via the
        OIDC token. The <code>before_script</code> writes the token to a file and configures an AWS CLI profile
        called <code>oidc</code> that Terraform will use to assume the role.
      </p>

      <h3>Step 6: Deploy the Infrastructure</h3>
      <p>
        Update <code>main.tf</code> to add the remote backend configuration above the resource definition:
      </p>
      <pre><code>{`terraform {
  backend "s3" {
    bucket         = "terraform-state-bucket-XXXX"
    key            = "statefile.tfstate"
    dynamodb_table = "terraform-state-lock-table"
    encrypt        = true
    profile        = "oidc"
  }
}

provider "aws" {
  profile = "oidc"
}

resource "aws_sqs_queue" "queue" {
  name = "sample-queue"
}`}</code></pre>
      <p>
        Replace <code>XXXX</code> with the actual bucket name. Commit this to main. The pipeline will trigger
        automatically. You can monitor the run under Build &gt; Jobs in the GitLab sidebar. If successful, the
        queue will appear in the cloud console and the state file will be stored in the S3 bucket.
      </p>
      <img src="/img/blogs/inline/cicd-deployed.png" alt="Successful pipeline deployment in GitLab CI" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />

      <h2>Applying This Pattern to Healthcare Infrastructure</h2>
      <p>
        The same pipeline structure applies directly to healthcare AI infrastructure. A few additional
        considerations for regulated environments:
      </p>
      <ul>
        <li>
          <strong>Approval gates:</strong> Add a manual approval step before the apply stage for production
          deployments. Most CI/CD platforms support environment-level protection rules that require a named
          reviewer to approve before the pipeline proceeds.
        </li>
        <li>
          <strong>Policy as code:</strong> Integrate a tool like Checkov or tfsec into the pipeline to scan
          Terraform plans for security misconfigurations before apply. This catches issues like unencrypted
          storage, overly permissive IAM policies, or missing audit logging before they reach production.
        </li>
        <li>
          <strong>Immutable infrastructure:</strong> Prefer replacing resources over modifying them in place.
          This makes rollbacks straightforward and ensures the deployed state always matches the version-controlled
          definition.
        </li>
        <li>
          <strong>Audit trail:</strong> Pipeline logs, combined with version control history and remote state,
          give you a complete record of who triggered each deployment, what changed, and when. This is the
          foundation of a defensible change management process under HIPAA and GxP frameworks.
        </li>
      </ul>

      <h2>Further Reading</h2>
      <ul>
        <li><a href="https://aws.amazon.com/blogs/apn/setting-up-openid-connect-with-gitlab-ci-cd-to-provide-secure-access-to-environments-in-aws-accounts/" target="_blank" rel="noopener noreferrer">Setting Up OpenID Connect with GitLab CI/CD to Provide Secure Access to Environments in AWS Accounts</a></li>
        <li><a href="https://community.aws/tutorials/continuous-integration-with-gitlab-at-10000-feet" target="_blank" rel="noopener noreferrer">Continuous Integration with GitLab at 10,000 Feet</a></li>
        <li><a href="https://community.aws/tutorials/bootstrapping-terraform-automation-amazon-codecatalyst" target="_blank" rel="noopener noreferrer">Bootstrapping your Terraform automation with Amazon CodeCatalyst</a></li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Automated infrastructure deployment with CI/CD and infrastructure as code removes the manual steps that
        introduce risk in regulated environments. Every change is version-controlled, every deployment is logged,
        and no human needs direct console access to production. The pattern described here, OIDC-based
        authentication, remote state with locking, and pipeline-driven apply, is a reusable foundation for any
        healthcare AI infrastructure team looking to build repeatable, auditable deployment workflows.
      </p>
    </>
  );
}
