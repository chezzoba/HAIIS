import Main from '@/components/Main';
import styles from './page.module.css';
import securityControls from './controls.json';

export const metadata = {
  title: 'Security Controls | HAIIS',
  description: 'Cross-cloud security control mappings for healthcare AI, covering AWS, Azure, and GCP services for PHI protection, model security, and compliance.',
};

export default function SecurityControlsPage() {
  return (
    <Main>
          <section className={styles.hero}>
          <h1>Security Controls</h1>
          <p>Cross-cloud control mappings for securing AI workloads that handle PHI</p>
        </section>

        <section className={styles.tableSection}>
          <div className={styles.tableWrapper}>
            <table className={styles.controlsTable}>
              <thead>
                <tr>
                  <th>Security Control</th>
                  <th>Use Case</th>
                  <th>AWS</th>
                  <th>Azure</th>
                  <th>GCP</th>
                </tr>
              </thead>
              <tbody>
                {securityControls.map((control, index) => (
                  <tr key={index}>
                    <td className={styles.controlName}>{control.control}</td>
                    <td className={styles.useCase}>{control.useCase}</td>
                    <td className={styles.cloudService}>
                      {control.aws.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.aws.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                    <td className={styles.cloudService}>
                      {control.azure.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.azure.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                    <td className={styles.cloudService}>
                      {control.gcp.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.gcp.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.bestPractices}>
          <h2>Best Practices for Healthcare AI Security</h2>
          <p className={styles.sectionIntro}>
            Healthcare AI systems face the usual infrastructure security concerns plus a set of AI-specific 
            risks: training data poisoning, prompt injection, model theft, hallucinated clinical advice, and 
            bias that shifts with patient populations. The practices below address both.
          </p>

          <div className={styles.practiceSection}>
            <h3>1. Data Protection & Privacy</h3>
            <ul>
              <li>
                <strong>Encryption Everywhere:</strong> Enable encryption at rest for all PHI/PII data stores using customer-managed keys (CMKs), not provider-managed defaults, so your organization retains key control and can revoke access independently of the cloud provider (see <em>Data Encryption at Rest</em>). Enforce TLS 1.2+ for all data in transit (see <em>Data Encryption in Transit</em>). Apply the same encryption requirements to model artifacts and training datasets stored in object storage.
              </li>
              <li>
                <strong>Data Minimization:</strong> Collect and process only the minimum data necessary for each AI use case. Implement automated lifecycle policies on your object storage and databases to expire or archive data beyond its retention window. Implement field-level filtering in your ingestion pipelines and document the minimum necessary standard per model in your model registry (see <em>AI Governance &amp; Model Lineage</em>).
              </li>
              <li>
                <strong>De-identification Before Training:</strong> Apply HIPAA Safe Harbor or Expert Determination de-identification before any data enters a training pipeline (see <em>PII/PHI Redaction in AI Pipelines</em>). <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Automated tools have known recall gaps for rare clinical identifiers. Supplement with a custom validation step that samples redacted outputs and flags residual PHI for human review before data is approved for training.
              </li>
              <li>
                <strong>Data Lineage:</strong> Maintain end-to-end audit trails covering data origin, transformations, model training runs, and inference outputs (see <em>AI Governance &amp; Model Lineage</em>). Pair with audit logging to capture data access events (see <em>Audit Logging</em>). Cross-system lineage stitching (e.g., from EHR source to model output) typically requires a custom metadata store or data catalog integration to bridge across services.
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>2. Access Control & Authentication</h3>
            <ul>
              <li>
                <strong>Zero Trust Architecture:</strong> Apply least-privilege access at every layer (network, service, and data) and continuously re-verify identity rather than relying on perimeter trust (see <em>Identity &amp; Access Management</em>). Pair with network controls to ensure workloads cannot communicate laterally without explicit allow rules (see <em>Network Isolation</em>).
              </li>
              <li>
                <strong>Role-Based Access Control (RBAC):</strong> Define distinct roles for data scientists, clinicians, ML engineers, auditors, and automated pipelines, each with the minimum permissions required. Use privileged access tooling to detect and remediate over-permissioned roles (see <em>Privileged Access Management</em>). Review role assignments quarterly and remove access immediately upon role change or offboarding.
              </li>
              <li>
                <strong>Multi-Factor Authentication:</strong> Enforce MFA for all human access to AI systems, model registries, and any environment that can reach PHI. AWS IAM Identity Center, Azure AD Conditional Access, and GCP Cloud Identity all support MFA enforcement at the organization level (see <em>Identity &amp; Access Management</em>).
              </li>
              <li>
                <strong>Service-to-Service Authentication:</strong> Use platform-managed identities (AWS IAM Roles, Azure Managed Identities, GCP Service Accounts) for all automated AI pipeline components. Never embed long-lived credentials in code or environment variables. Store them in a secrets manager and rotate them automatically on a defined schedule (see <em>Secrets Management</em>).
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>3. Responsible AI & Guardrails</h3>
            <ul>
              <li>
                <strong>Content Safety Guardrails:</strong> Configure platform-native guardrails before any LLM output reaches a clinical user (see <em>AI Content Safety &amp; Guardrails</em>). Set thresholds conservatively for clinical contexts. A false positive (blocked output) is safer than a false negative (harmful output delivered to a patient).
              </li>
              <li>
                <strong>Prompt Injection Defense:</strong> Treat all user-supplied input as untrusted. Use prompt attack filters and prompt shields to detect direct and indirect injection attempts (see <em>Prompt Injection &amp; Jailbreak Prevention</em>). <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Structural defenses such as separating system prompts from user input, enforcing output schemas, and sandboxing tool-calling agents must be implemented in your application layer.
              </li>
              <li>
                <strong>PII/PHI Redaction in Pipelines:</strong> Run all data through automated redaction before it enters a model (see <em>PII/PHI Redaction in AI Pipelines</em>). Configure entity types explicitly. Do not rely on default settings, as healthcare data contains identifiers (device IDs, dates, geographic subdivisions) that require custom entity definitions beyond standard PII categories.
              </li>
              <li>
                <strong>Output Filtering:</strong> Apply post-generation validation to catch hallucinations, unsupported clinical claims, or inadvertent PHI in model responses. <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> No cloud service provides out-of-the-box hallucination detection for clinical content. You must implement a custom validation layer (for example, a secondary LLM judge, a retrieval-grounding check, or a rules-based filter) that evaluates outputs against a trusted knowledge base before delivery.
              </li>
              <li>
                <strong>Grounding & RAG Controls:</strong> When using retrieval-augmented generation, restrict the retrieval corpus to validated, access-controlled knowledge bases. <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Enforcing patient-level access scoping within a RAG retrieval step (e.g., ensuring a query only retrieves documents the requesting user is authorized to see) requires custom authorization logic in your retrieval pipeline. Cloud vector stores do not natively enforce row-level security tied to clinical access controls.
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>4. Bias, Fairness & Explainability</h3>
            <ul>
              <li>
                <strong>Pre-deployment Bias Audits:</strong> Before any model enters clinical use, evaluate it for disparate performance across protected attributes (age, race, sex, insurance status, language). Use bias detection tooling to compute pre- and post-training bias metrics and disaggregated performance views (see <em>AI Bias Detection &amp; Fairness</em>). Document results in a model card and require sign-off before deployment.
              </li>
              <li>
                <strong>Ongoing Fairness Monitoring:</strong> Bias can emerge or worsen after deployment as patient populations shift. Track performance metrics disaggregated by subgroup in production (see <em>AI Model Monitoring &amp; Drift Detection</em>). Set alert thresholds that trigger review when performance gaps exceed acceptable bounds.
              </li>
              <li>
                <strong>Explainable Predictions:</strong> For clinical decision support models, provide feature-level explanations alongside predictions so clinicians can evaluate and challenge AI recommendations (see <em>AI Model Explainability</em>). Surfacing explanations in a clinical UI in a format meaningful to non-technical users (e.g., natural language summaries of contributing factors) requires custom presentation logic beyond what these services provide.
              </li>
              <li>
                <strong>Human-in-the-Loop:</strong> Require qualified clinician review for high-stakes AI outputs (diagnosis, triage, medication recommendations). Build escalation logic that routes low-confidence predictions or out-of-distribution inputs to a human reviewer queue, with audit logging of the review decision.
              </li>
              <li>
                <strong>Disparate Impact Reporting:</strong> Produce and retain fairness reports as part of every model governance review cycle. Attach fairness metrics to model versions in your model registry (see <em>AI Governance &amp; Model Lineage</em>). Reports should cover all subgroups relevant to the clinical use case and be retained for the duration of the model&apos;s deployment.
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>5. Model Security & Integrity</h3>
            <ul>
              <li>
                <strong>Model Versioning &amp; Signing:</strong> Every model artifact promoted to staging or production must be versioned and cryptographically signed to detect tampering. Use your model registry to enforce versioned promotion gates (see <em>AI Governance &amp; Model Lineage</em>). <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Cryptographic signing of model artifacts (e.g., SHA-256 checksums stored in a tamper-evident log) is not provided natively by these registries and must be implemented as a step in your CI/CD pipeline.
              </li>
              <li>
                <strong>Adversarial Robustness Testing:</strong> Before deployment, test models against adversarial inputs (perturbed images, edge-case lab values, or crafted text) to identify brittleness that could be exploited. Use open-source libraries (e.g., <a href="https://github.com/Trusted-AI/adversarial-robustness-toolbox" target="_blank" rel="noopener noreferrer">IBM ART</a>, <a href="https://github.com/cleverhans-lab/cleverhans" target="_blank" rel="noopener noreferrer">CleverHans</a>) and build adversarial test suites tailored to your clinical domain as part of your pre-deployment validation process.
              </li>
              <li>
                <strong>Model Monitoring &amp; Drift Detection:</strong> Deploy continuous monitoring to catch data drift, concept drift, and anomalous prediction patterns that may indicate data poisoning or population shift (see <em>AI Model Monitoring &amp; Drift Detection</em>). Configure alerts that trigger retraining or rollback workflows when drift metrics exceed defined thresholds.
              </li>
              <li>
                <strong>Secure Training Pipelines:</strong> Isolate training environments in dedicated VPCs with no public internet egress (see <em>Network Isolation</em>). Validate all training data sources against a known-good manifest before ingestion. Scan training container images for vulnerabilities before execution (see <em>Vulnerability Scanning</em>).
              </li>
              <li>
                <strong>Model Lineage Tracking:</strong> Record full provenance (training datasets, preprocessing steps, hyperparameters, evaluation results, and approvers) for every model version (see <em>AI Governance &amp; Model Lineage</em>). This record is required for FDA SaMD submissions and HIPAA audit responses.
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>6. Compliance & Governance</h3>
            <ul>
              <li>
                <strong>Regulatory Alignment:</strong> Map each AI model to the specific regulations it must satisfy: HIPAA/HITECH for PHI handling, FDA SaMD guidance for clinical decision support, and state-level AI transparency laws. Use compliance monitoring tooling to continuously assess control coverage (see <em>Compliance Monitoring</em>).
              </li>
              <li>
                <strong>Business Associate Agreements:</strong> Confirm BAAs are executed with every cloud provider and third-party AI vendor that processes PHI, including foundation model API providers. AWS, Azure, and GCP all offer BAAs for their HIPAA-eligible services. Verify that the specific services in each row of the table above are covered under your active BAA. Note that BAA coverage does not extend to open-source models you self-host.
              </li>
              <li>
                <strong>AI Model Registry &amp; Approval Workflows:</strong> Require formal sign-off before any model reaches production. Use your model registry to gate promotions and capture the approver identity, evaluation results, bias audit outcome, and regulatory classification for each release (see <em>AI Governance &amp; Model Lineage</em>).
              </li>
              <li>
                <strong>Audit Readiness:</strong> Configure audit logging to capture all PHI access, model invocations, and administrative actions, and retain logs for a minimum of six years per HIPAA requirements (see <em>Audit Logging</em>). <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Logging AI-specific events (prompt/response pairs, model version used per inference, confidence scores) requires instrumentation in your application code. Cloud audit logs capture infrastructure events only.
              </li>
              <li>
                <strong>Risk Assessments:</strong> Conduct formal risk assessments before deploying each AI model, covering security, bias, safety, and unintended use. Use compliance monitoring tooling to automate infrastructure risk scoring and supplement with a structured algorithmic impact assessment process (see <em>Compliance Monitoring</em>).
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>7. Infrastructure Security</h3>
            <ul>
              <li>
                <strong>Network Segmentation:</strong> Deploy AI workloads in dedicated VPCs or VNets with no default internet egress. Enforce deny-by-default inbound and outbound rules (see <em>Network Isolation</em>). Separate training, inference, and data storage subnets with explicit allow rules only for required traffic paths.
              </li>
              <li>
                <strong>Secure APIs:</strong> Protect all AI service endpoints with an API gateway that enforces rate limiting, request size limits, and authentication (OAuth 2.0 / API keys) at the edge (see <em>API Security</em>). Pair with a web application firewall to block OWASP Top 10 attack patterns (see <em>Web Application Firewall</em>).
              </li>
              <li>
                <strong>Container Security:</strong> Scan all container images before deployment (see <em>Vulnerability Scanning</em>). Use minimal base images, run containers as non-root, and enforce read-only root filesystems. Apply runtime security policies through your container orchestration platform (see <em>Container Security</em>).
              </li>
              <li>
                <strong>Secrets Management:</strong> Store all API keys, database credentials, model signing keys, and certificates in a dedicated secrets manager (see <em>Secrets Management</em>). Enable automatic rotation for all secrets with a defined rotation period. Scan repositories and object storage for accidentally committed credentials using data loss prevention tooling (see <em>Data Loss Prevention</em>).
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>8. Incident Response & Recovery</h3>
            <ul>
              <li>
                <strong>Incident Response Plan:</strong> Develop and test an AI-specific incident response runbook that covers PHI breaches, model compromise (e.g., poisoned weights, unauthorized model swap), and harmful output events. Use incident response tooling to automate detection-to-response workflows (see <em>Incident Response</em>). <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> AI-specific response actions such as automatically disabling a model endpoint, rolling back to a prior version, or quarantining a training dataset must be implemented as custom automation scripts triggered by your alerting pipeline.
              </li>
              <li>
                <strong>Backup &amp; Recovery:</strong> Automate backups of model artifacts, training datasets, pipeline configurations, and inference logs (see <em>Backup &amp; Recovery</em>). Test recovery procedures at least quarterly. Verify that a model can be restored to a known-good version and that restored data passes integrity checks before re-entering production.
              </li>
              <li>
                <strong>Breach Notification:</strong> Establish documented processes for HIPAA breach notification: affected individuals within 60 days of discovery, HHS without unreasonable delay, and media notification for breaches affecting more than 500 residents of a state. <span className={styles.customCodeBadge}>⚠ Requires Custom Code</span> Breach scope determination (identifying which patients were affected by a PHI exposure) requires custom tooling that correlates audit logs (see <em>Audit Logging</em>) with patient record identifiers.
              </li>
              <li>
                <strong>Post-Incident Analysis:</strong> Conduct a structured post-mortem within 30 days of any security incident. Use threat detection findings as inputs to the root cause analysis (see <em>Threat Detection</em>). Document control gaps, assign remediation owners, and track closure in your compliance monitoring system (see <em>Compliance Monitoring</em>).
              </li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>9. Transparency & Explainability</h3>
            <ul>
              <li>
                <strong>Model Documentation (Model Cards):</strong> Produce a model card for every model entering clinical use. It should cover intended use, out-of-scope uses, training data sources, evaluation results (including subgroup performance), known limitations, and the regulatory classification (see <em>AI Model Documentation &amp; Cards</em>).
              </li>
              <li>
                <strong>Explainable AI in Clinical Interfaces:</strong> Surface feature-level explanations alongside AI predictions in clinical tools. Use explainability services to generate explanations at inference time (see <em>AI Model Explainability</em>).
              </li>
              <li>
                <strong>Patient Rights (Access, Correction, Deletion):</strong> Implement mechanisms for patients to request access to their data used in AI systems, correct inaccuracies, and request deletion under HIPAA and applicable state laws. This includes request intake, fulfillment, and audit trail capabilities, as well as the ability to identify and remove a specific patient&apos;s records from training datasets and document the impact on affected models.
              </li>
              <li>
                <strong>Clinical Validation Before Deployment:</strong> Require prospective clinical validation by qualified healthcare professionals before any AI model is used in patient care decisions. Clinical validation workflows, including study design, outcome tracking, and sign-off by clinical leadership, must be managed through your organization&apos;s clinical governance processes.
              </li>
            </ul>
          </div>
          <div className={styles.practiceSection}>
            <h3>10. Supply Chain Security</h3>
            <ul>
              <li>
                <strong>Dependency Scanning &amp; SBOM:</strong> Generate a Software Bill of Materials (SBOM) for every AI application and pipeline. Scan all open-source and third-party dependencies for known vulnerabilities before deployment (see <em>Vulnerability Scanning</em>). Integrate dependency scanning into CI/CD gates so that builds fail when critical CVEs are detected.
              </li>
              <li>
                <strong>Artifact Integrity Verification:</strong> Require cryptographic signatures on all artifacts promoted through your pipeline, including container images, model files, and infrastructure-as-code modules (see <em>Secure Software Supply Chain</em>). Use binary authorization or admission controllers to block unsigned artifacts from reaching production environments.
              </li>
              <li>
                <strong>Third-Party Model Provenance:</strong> Before using any pre-trained or foundation model from an external source (Hugging Face, model zoos, vendor APIs), verify its provenance: publisher identity, training data disclosures, license terms, and known vulnerability advisories. Build an internal review and approval process that evaluates model origin, licensing compatibility, and security posture before any external model enters your environment.
              </li>
              <li>
                <strong>CI/CD Pipeline Hardening:</strong> Treat your AI build and deployment pipelines as high-value targets. Enforce branch protection, require code review for pipeline configuration changes, use ephemeral build environments, and restrict pipeline service accounts to least-privilege permissions (see <em>Privileged Access Management</em>). Audit all pipeline executions and retain logs (see <em>Audit Logging</em>).
              </li>
              <li>
                <strong>Private Package Registries:</strong> Host internal copies of approved dependencies in private artifact repositories (see <em>Secure Software Supply Chain</em>). Block direct pulls from public registries in production environments to prevent dependency confusion and typosquatting attacks. Regularly sync and scan approved packages against updated vulnerability databases.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.notes}>
          <h2>Implementation Notes</h2>
          <div className={styles.noteCards}>
            <div className={styles.noteCard}>
              <h3>HIPAA &amp; BAA Coverage</h3>
              <p>
                All listed services support HIPAA-compliant configurations when properly implemented.
                Verify that each service you adopt is covered under your active Business Associate Agreement:
                {' '}<a href="https://aws.amazon.com/compliance/hipaa-eligible-services-reference/" target="_blank" rel="noopener noreferrer">AWS HIPAA Eligible Services</a>,
                {' '}<a href="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-hipaa-us" target="_blank" rel="noopener noreferrer">Azure HIPAA Offering</a>,
                {' '}<a href="https://cloud.google.com/security/compliance/hipaa" target="_blank" rel="noopener noreferrer">GCP HIPAA Compliance</a>.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>FDA SaMD &amp; AI Regulation</h3>
              <p>
                Clinical decision support models may qualify as Software as a Medical Device (SaMD) under
                {' '}<a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-software-medical-device" target="_blank" rel="noopener noreferrer">FDA AI/ML guidance</a>.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Multi-Cloud Strategy</h3>
              <p>
                Use this mapping to maintain consistent security postures across cloud providers or to
                facilitate migration projects. Each provider publishes a shared responsibility model
                (<a href="https://aws.amazon.com/compliance/shared-responsibility-model/" target="_blank" rel="noopener noreferrer">AWS</a>,
                {' '}<a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility" target="_blank" rel="noopener noreferrer">Azure</a>,
                {' '}<a href="https://cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate" target="_blank" rel="noopener noreferrer">GCP</a>)
                that defines the boundary between provider-managed and customer-managed controls.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Defense in Depth</h3>
              <p>
                No single control is sufficient. Layer network isolation, encryption, identity, monitoring,
                and guardrails so that a failure in one control does not expose PHI or compromise model integrity.
                The <a href="https://csrc.nist.gov/pubs/ai/600/1/final" target="_blank" rel="noopener noreferrer">NIST AI RMF</a> provides
                a structured approach to identifying and mitigating AI-specific risks across these layers.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Logging &amp; Audit Retention</h3>
              <p>
                HIPAA requires audit logs covering PHI access to be retained for a minimum of six years.
                Configure centralized log aggregation early, retrofitting retention policies after launch is
                significantly harder. Each provider offers long-term log storage options:
                {' '}<a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html" target="_blank" rel="noopener noreferrer">CloudTrail log integrity</a>,
                {' '}<a href="https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-configure" target="_blank" rel="noopener noreferrer">Azure Monitor retention</a>,
                {' '}<a href="https://cloud.google.com/logging/docs/routing/overview" target="_blank" rel="noopener noreferrer">Cloud Logging routing</a>.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>State-Level AI Laws</h3>
              <p>
                Beyond federal requirements, several U.S. states have enacted or proposed AI-specific
                transparency and accountability laws. Colorado&apos;s
                {' '}<a href="https://leg.colorado.gov/bills/sb24-205" target="_blank" rel="noopener noreferrer">SB 24-205</a> requires
                deployers of high-risk AI to conduct impact assessments, and similar legislation is advancing
                in other states. Track applicable state obligations alongside HIPAA and FDA requirements.
              </p>
            </div>
          </div>
        </section>
      </Main>
  );
}
