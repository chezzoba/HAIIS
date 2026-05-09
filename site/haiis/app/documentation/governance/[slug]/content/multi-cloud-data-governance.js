export const meta = {
  title: 'Multi-Cloud Data Governance with Databricks',
  subtitle: 'Federated data access patterns for compliant sharing of patient and clinical data across cloud environments',
  author: 'Kaizad Wadia',
  published: 'January 2, 2025',
  source: 'AI Advances',
  sourceUrl: 'https://ai.gopubby.com/unlocking-the-power-of-multi-cloud-data-using-delta-sharing-9088d46f0a68',
  clouds: ['AWS', 'Azure', 'Databricks'],
  previewImage: '/img/blogs/multiclouddatamesh.webp',
};

export default function Content() {
  return (
    <>
      <p>
        Many healthcare organisations have data spread across multiple cloud environments. Clinical data may
        live in{' '}
        <a href="https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction" target="_blank" rel="noopener noreferrer">Azure Blob Storage</a>,
        research data in{' '}
        <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">Amazon S3</a>,
        and operational data in a third platform. Each environment was chosen for good reasons, but the result
        is data silos that make it difficult to get a unified view for analytics, research, or AI model
        training. Moving data between clouds is expensive, slow, and introduces compliance risk every time
        PHI crosses a boundary.
      </p>
      <p>
        <a href="https://www.databricks.com/product/delta-sharing" target="_blank" rel="noopener noreferrer">Delta Sharing</a>{' '}
        in Databricks offers a different approach: federated access that lets analysts query data where it
        lives, without copying it. This article walks through the architecture, the governance controls, and
        the practical considerations for deploying this pattern in a regulated healthcare environment.
      </p>

      <h2>Solution Overview</h2>
      <p>
        The architecture deploys Databricks workspaces in each cloud environment and uses Delta Sharing to
        enable secure, cross-cloud data access. The{' '}
        <a href="https://www.databricks.com/product/unity-catalog" target="_blank" rel="noopener noreferrer">Databricks Unity Catalog</a>{' '}
        acts as the centralised governance layer, providing a single place to manage permissions, lineage,
        and audit logs across all environments.
      </p>
      <img src="/img/blogs/inline/multicloud-data-arch.webp" alt="Cross-cloud data platform architecture using Databricks" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        A useful analogy: imagine several hospital departments, each with its own records system. Each
        department has data that other departments sometimes need. Traditionally, getting that data means
        requesting an extract, waiting for it to be sent, and loading it into your own system. With a
        federated approach, each department publishes a catalogue of what it has, and authorised users
        from other departments can query it directly without the data ever leaving its source system.
        Delta Sharing is the federated catalogue layer; the cloud environments are the departments.
      </p>
      <p>
        This eliminates complex data migration and replication processes, reduces latency, and ensures
        analyses are always run against current data rather than a stale copy.
      </p>

      <h2>Cross-Cloud Data Access</h2>
      <p>
        <a href="https://docs.databricks.com/en/delta-sharing/index.html" target="_blank" rel="noopener noreferrer">Enabling Delta Sharing</a>{' '}
        involves configuring the appropriate settings in each Databricks workspace. Once enabled, the
        catalogue owner of a provider workspace grants access to specific datasets. This can be done through
        the Databricks portal or programmatically via the REST API or CLI.
      </p>
      <p>
        In the recipient workspace, shared datasets appear as external tables. Analysts can run standard
        SQL queries or use{' '}
        <a href="https://docs.databricks.com/en/notebooks/index.html" target="_blank" rel="noopener noreferrer">Databricks notebooks</a>{' '}
        against them exactly as they would with local data. There is no data migration, no replication
        pipeline to maintain, and no delay between when data is updated at the source and when it is
        available to query.
      </p>
      <p>
        Delta Sharing also supports secure sharing of notebooks and models across workspaces, enabling
        collaboration on analytics assets without duplicating effort or passing datasets around manually.
      </p>

      <h2>Integrating with Cloud-Native Services</h2>
      <p>
        The federated data layer integrates with cloud-native services in each environment, allowing
        organisations to use the best tools from each cloud without being locked into one.
      </p>
      <ul>
        <li>
          <strong><a href="https://aws.amazon.com/sagemaker-ai/" target="_blank" rel="noopener noreferrer">Amazon SageMaker AI</a>:</strong>{' '}
          ML services can authenticate to Databricks using{' '}
          <a href="https://docs.databricks.com/en/dev-tools/auth/index.html" target="_blank" rel="noopener noreferrer">OAuth tokens or personal access tokens</a>{' '}
          and access data through the Unity Catalog for model training at scale. The{' '}
          <a href="https://marketplace.visualstudio.com/items?itemName=databricks.databricks" target="_blank" rel="noopener noreferrer">Databricks extension for VS Code</a>{' '}
          makes this seamless in the{' '}
          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html" target="_blank" rel="noopener noreferrer">SageMaker Code Editor</a>.
        </li>
        <li>
          <strong><a href="https://www.databricks.com/blog/announcing-public-preview-hive-metastore-and-aws-glue-federation-unity-catalog" target="_blank" rel="noopener noreferrer">AWS Glue catalog federation</a>:</strong>{' '}
          Allows existing{' '}
          <a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/serverless-etl-aws-glue/aws-glue-data-catalog.html" target="_blank" rel="noopener noreferrer">AWS Glue catalogs</a>{' '}
          to be integrated with the Unity Catalog without manually migrating metadata, providing a single
          pane of glass for all dispersed data assets.
        </li>
        <li>
          <strong><a href="https://learn.microsoft.com/en-us/azure/databricks/partners/bi/power-bi" target="_blank" rel="noopener noreferrer">Microsoft Power BI</a>:</strong>{' '}
          BI tools can connect to the Unity Catalog directly, with authentication via OAuth or SSO, enabling
          comprehensive dashboards that draw on data from multiple cloud environments.
        </li>
      </ul>

      <h2>Security and Governance</h2>
      <p>
        In a healthcare context, the governance controls are as important as the data access capabilities.
        Delta Sharing provides fine-grained permissions so that only authorised users can access specific
        datasets. Data is encrypted in transit. The Unity Catalog maintains{' '}
        <a href="https://docs.databricks.com/en/data-governance/unity-catalog/audit.html" target="_blank" rel="noopener noreferrer">audit logs</a>{' '}
        of all data access, changes, and sharing events.
      </p>
      <p>
        Identity federation and single sign-on are essential for a multi-cloud environment. Using a
        centralised identity provider such as{' '}
        <a href="https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id" target="_blank" rel="noopener noreferrer">Microsoft Entra ID</a>{' '}
        or{' '}
        <a href="https://aws.amazon.com/iam/identity-center/" target="_blank" rel="noopener noreferrer">AWS IAM Identity Center</a>{' '}
        allows users to authenticate once and access Databricks workspaces in both Azure and AWS without
        maintaining separate credentials for each environment. To{' '}
        <a href="https://docs.databricks.com/en/admin/account-settings-e2/single-sign-on/index.html" target="_blank" rel="noopener noreferrer">configure SSO in Databricks</a>,
        organisations can create a{' '}
        <a href="https://learn.microsoft.com/en-us/power-pages/security/authentication/saml2-settings-azure-ad" target="_blank" rel="noopener noreferrer">SAML 2.0 app in Entra ID</a>{' '}
        or another identity provider.
      </p>
      <p>
        Data governance in a multi-cloud environment requires comprehensive access control policies that
        define who can access what data and under what conditions. Coupled with data lineage tracking and
        audit capabilities, these policies support compliance with HIPAA, GDPR, and other regulatory
        frameworks. Tracking lineage across clouds is challenging because each cloud has its own native
        lineage tools. Third-party governance platforms such as{' '}
        <a href="https://www.immuta.com/" target="_blank" rel="noopener noreferrer">Immuta</a>{' '}
        can bridge this gap, though they introduce additional cost and complexity.
      </p>
      <p>
        Continuous monitoring of data access is essential. Audit logs from Databricks should be integrated
        with a centralised monitoring platform so that anomalies, unauthorised access attempts, and policy
        violations are detected and escalated promptly. Regular reviews of access control policies ensure
        they remain aligned with current roles and regulatory requirements.
      </p>

      <h2>Cost Considerations</h2>
      <p>
        Multi-cloud data architectures introduce several cost factors that need to be managed deliberately.
        Storage costs, compute costs for data processing, and the cost of Databricks licences all vary
        with usage and scale. The most significant and often underestimated cost is{' '}
        <a href="https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/" target="_blank" rel="noopener noreferrer">data transfer between clouds</a>.
      </p>
      <p>
        When data is transferred between cloud providers, it travels over the public internet rather than
        within a cloud provider's internal network. This incurs egress charges from the source cloud and
        adds latency that depends on the geographic distance between the availability zones involved.
        For large datasets or high-frequency queries, this can become a material cost.
      </p>
      <p>
        Strategies to manage costs include{' '}
        <a href="https://aws.amazon.com/aws-cost-management/aws-cost-optimization/right-sizing/" target="_blank" rel="noopener noreferrer">right-sizing</a>{' '}
        <a href="https://docs.databricks.com/en/compute/sql-warehouse/warehouse-behavior.html" target="_blank" rel="noopener noreferrer">warehouse instances</a>,
        using{' '}
        <a href="https://aws.amazon.com/savingsplans/compute-pricing/" target="_blank" rel="noopener noreferrer">reserved</a>{' '}
        or{' '}
        <a href="https://aws.amazon.com/ec2/spot/" target="_blank" rel="noopener noreferrer">spot instances</a>{' '}
        where workloads allow, implementing data compression and partitioning to minimise the volume of
        data scanned per query, and using cost monitoring tools such as{' '}
        <a href="https://aws.amazon.com/aws-cost-management/aws-cost-explorer/" target="_blank" rel="noopener noreferrer">AWS Cost Explorer</a>,{' '}
        <a href="https://azure.microsoft.com/en-us/products/cost-management" target="_blank" rel="noopener noreferrer">Microsoft Cost Management</a>,
        and the{' '}
        <a href="https://docs.databricks.com/en/admin/account-settings/account.html" target="_blank" rel="noopener noreferrer">Databricks billing portal</a>{' '}
        to track spending patterns. Third-party FinOps platforms such as{' '}
        <a href="https://www.datadoghq.com/product/cloud-cost-management/" target="_blank" rel="noopener noreferrer">Datadog</a>{' '}
        or{' '}
        <a href="https://www.apptio.com/products/cloudability/" target="_blank" rel="noopener noreferrer">Apptio</a>{' '}
        can consolidate visibility across clouds, though they add their own cost.
      </p>
      <p>
        It is also worth noting that serverless compute options stop warehouse instances when not in use,
        but this is not the same as paying only for queries executed as with{' '}
        <a href="https://aws.amazon.com/athena/" target="_blank" rel="noopener noreferrer">Amazon Athena</a>.
        Understanding the billing model of each service before committing to an architecture avoids
        unexpected costs at scale.
      </p>

      <h2>Conclusion</h2>
      <p>
        A federated multi-cloud data architecture using Delta Sharing gives healthcare organisations the
        ability to break down data silos without the compliance risk and operational overhead of moving
        data between clouds. Analysts and data scientists can join and transform data across environments
        using standard tools, governance is centralised in the Unity Catalog, and access controls are
        enforced consistently regardless of where the data lives.
      </p>
      <p>
        The pattern comes with real tradeoffs: cross-cloud data transfer costs, latency that depends on
        network geography, and the complexity of maintaining governance policies across multiple platforms.
        These are manageable with the right architecture and tooling choices, but they need to be planned
        for rather than discovered after deployment. For organisations already operating in a multi-cloud
        environment, this approach offers a practical path to unified data governance without requiring
        a costly and risky data consolidation project.
      </p>
    </>
  );
}
