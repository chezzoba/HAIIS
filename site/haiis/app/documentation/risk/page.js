import Link from 'next/link';
import Main from '@/components/Main';
import styles from './page.module.css';

export const metadata = {
  title: 'Risk Assessment Worksheets',
  description: 'Seven healthcare AI risk assessment workbooks covering clinical safety, privacy, governance, resilience, security, fairness, and transparency. Each question is traced to NIST AI RMF 1.0.',
  alternates: { canonical: 'https://haiis.org/documentation/risk' },
  openGraph: {
    title: 'Risk Assessment Worksheets | HAIIS',
    description: 'Seven healthcare AI risk assessment workbooks covering clinical safety, privacy, governance, resilience, security, fairness, and transparency. Mapped to NIST AI RMF 1.0.',
    url: 'https://haiis.org/documentation/risk',
    type: 'website',
  },
};

const eyebrow = { color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' };
const h2Style = { textAlign: 'left', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a1a1a' };
const container = { maxWidth: '1100px', margin: '0 auto' };

const worksheets = [
  {
    title: 'Clinical Safety & Efficacy',
    file: 'clinical-safety-efficacy.xlsx',
    ids: 'CS-01 to CS-12',
    functions: ['MEASURE', 'MAP', 'GOVERN'],
    description:
      'Checks that a model meets clinical safety standards and keeps producing validated outcomes once it is in front of patients. Questions press on whether the system was validated against ground truth representative of your actual population, whether the distinction between advisory and autonomous use is written down, and whether clinicians ever lose the ability to override a recommendation.',
    checkpoints: [
      'Validation against representative clinical ground truth',
      'Advisory vs autonomous decision authority',
      'Confidence scores and uncertainty shown to clinicians',
      'Human override on every recommendation',
      'Edge-case testing for rare and underrepresented cohorts',
      'Outcome drift monitoring and decommissioning criteria',
    ],
  },
  {
    title: 'Data Privacy & Compliance',
    file: 'data-privacy-compliance.xlsx',
    ids: 'DP-01 to DP-12',
    functions: ['MEASURE', 'GOVERN', 'MAP'],
    description:
      'Walks the full lifecycle of protected health information, from how it is encrypted and classified to how it leaves the building. It asks whether keys are organization-managed rather than provider-default, whether de-identification happens before data reaches a training pipeline, and whether model outputs that point to an identifiable patient are themselves treated as PHI.',
    checkpoints: [
      'Encryption at rest with organization-managed keys',
      'TLS 1.2+ between every AI component',
      'De-identification before model training',
      'Business Associate Agreements with all PHI processors',
      'Data residency and retention enforcement',
      'Patient access, correction, and deletion handling',
    ],
  },
  {
    title: 'AI Governance & Accountability',
    file: 'ai-governance-accountability.xlsx',
    ids: 'AG-01 to AG-12',
    functions: ['GOVERN', 'MANAGE'],
    description:
      'Looks at who actually owns AI decisions inside the organization. It covers whether a body with real authority signs off on deployments, whether a model registry tracks version, owner, and approval history, and whether retraining runs through change management instead of landing in production unannounced. Patient notification and a working escalation path are part of the same picture.',
    checkpoints: [
      'Governance committee with deployment authority',
      'Mandatory pre-production risk assessment',
      'Model registry with version and approval history',
      'Defined roles across the model lifecycle',
      'Change management for updates and retraining',
      'Escalation path for raised concerns',
    ],
  },
  {
    title: 'Operational Resilience',
    file: 'operational-resilience.xlsx',
    ids: 'OR-01 to OR-12',
    functions: ['MANAGE', 'MEASURE'],
    description:
      'Tests whether clinical work keeps moving when the AI does not. It asks for an availability target tied to the clinical workflow, documented manual fallback for when the system is down, and an architecture without a single point of failure. Deployment safety shows up here too, through canary or blue-green rollouts and an automated rollback when a new model drops below threshold.',
    checkpoints: [
      'Availability SLA/SLO aligned to clinical need',
      'Documented manual fallback procedures',
      'No single point of failure in the architecture',
      'Health, latency, and error-rate alerting',
      'Tested disaster recovery for models and data',
      'Automated rollback on performance degradation',
    ],
  },
  {
    title: 'Security & Threat Protection',
    file: 'security-threat-protection.xlsx',
    ids: 'ST-01 to ST-12',
    functions: ['MEASURE', 'GOVERN'],
    description:
      'Focuses on the attack surface that traditional security reviews tend to miss. It covers adversarial testing for evasion, poisoning, and model inversion, prompt injection and jailbreak defense for LLM-based systems, segmentation between training, inference, and clinical data, and verification that the model supply chain has not been tampered with before anything ships.',
    checkpoints: [
      'Authentication, authorization, and rate limiting on endpoints',
      'Adversarial testing for evasion, poisoning, inversion',
      'Prompt injection and jailbreak defense',
      'Segmentation of training, inference, and data stores',
      'Image and dependency vulnerability scanning',
      'Supply chain integrity verification',
    ],
  },
  {
    title: 'Fairness & Equity',
    file: 'fairness-equity.xlsx',
    ids: 'FE-01 to FE-12',
    functions: ['MEASURE', 'GOVERN', 'MAP'],
    description:
      'Examines whether the system performs evenly across the people it serves and whether it could quietly widen existing disparities. It asks for performance broken out by race, ethnicity, gender, and age, checks for proxy discrimination where correlated features stand in for protected attributes, and looks for the fairness metrics your clinical stakeholders actually agreed to, such as equalized odds or calibration.',
    checkpoints: [
      'Performance disparity testing across demographics',
      'Training data representative of the served population',
      'Proxy discrimination evaluation',
      'Accessibility for patients with disabilities',
      'Language diversity in the patient population',
      'Agreed fairness metrics and emergent-bias monitoring',
    ],
  },
  {
    title: 'Transparency & Explainability',
    file: 'transparency-explainability.xlsx',
    ids: 'TE-01 to TE-12',
    functions: ['MAP', 'MEASURE', 'GOVERN', 'MANAGE'],
    description:
      'Asks whether the people relying on the system can actually understand and trace it. It covers explanations clinicians can act on, a complete audit trail from input through inference to output, and honest documentation of purpose and failure modes. It also reaches into third-party and foundation model risk, staff training, and the energy footprint of training and inference.',
    checkpoints: [
      'Decision logic explainable to clinicians',
      'End-to-end auditable inference trail',
      'Documented purpose, scope, and failure modes',
      'Third-party and foundation model monitoring',
      'Staff training on capabilities and limits',
      'Environmental impact assessment',
    ],
  },
];

const anatomy = [
  {
    num: '01',
    title: 'Risk Assessment',
    desc: 'Twelve questions, each with why it matters, the inherent risk if left unaddressed, and best-practice guidance. You record Yes, No, or Partial, plus evidence and a remediation plan.',
  },
  {
    num: '02',
    title: 'Scoring Guide',
    desc: 'Defines the answer and risk levels and rolls your responses into an overall posture band: Strong, Acceptable, Moderate, Elevated, or Critical.',
  },
  {
    num: '03',
    title: 'NIST AI RMF Mapping',
    desc: 'Traces every question to specific NIST AI RMF 1.0 subcategories, so framework alignment is documented rather than asserted.',
  },
  {
    num: '04',
    title: 'Dashboard',
    desc: 'Aggregates the question-level risk scores into a per-pillar summary you can bring to a governance review.',
  },
];

const workflow = [
  { n: '01', title: 'Answer each question with your team', desc: 'Sit clinical, technical, compliance, and security people at the same table. Mark each question Yes, No, or Partial, and capture the evidence behind the answer.' },
  { n: '02', title: 'Let the workbook score it', desc: 'Each response computes a risk level and a score from 0 to 3, weighted by the inherent risk of the question. A High-risk gap answered No surfaces as a critical item; a strong control scores zero.' },
  { n: '03', title: 'Read your posture band', desc: 'The Scoring Guide turns the counts into a posture: any High-risk gaps push you into Elevated or Critical, while zero High and zero Medium reads as Strong.' },
  { n: '04', title: 'Remediate on the stated clock', desc: 'High items carry a 30-day clock and a governance escalation, Medium items 90 days in the risk register, and Low items a six-month improvement window.' },
  { n: '05', title: 'Reassess on cadence', desc: 'Run a full pass before first deployment, review open High and Medium items quarterly, reassess annually, and trigger a fresh review after any incident or regulatory change.' },
];

const frameworks = [
  'NIST AI Risk Management Framework (AI RMF 1.0)',
  'HIPAA Security Rule and Privacy Rule',
  'FDA Software as a Medical Device (SaMD)',
  'WHO Ethics & Governance of AI for Health'
];

export default function RiskWorksheetsPage() {
  return (
    <Main>
      {/* Hero */}
      <section className={styles.hero}>
        <Link href="/documentation" className={styles.backLink}>
          ← Documentation
        </Link>
        <h1>Risk Assessment Worksheets</h1>
        <p>
          Seven cloud-agnostic workbooks that take a healthcare AI system through 84 structured questions
        </p>
      </section>

      {/* Overview + anatomy */}
      <section style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>Overview</p>
          <h2 style={h2Style}>What these worksheets cover</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '820px', marginBottom: '1rem', fontSize: '0.95rem' }}>
            The set spans seven pillars of healthcare AI risk: clinical safety and efficacy, data privacy and compliance, governance and accountability, operational resilience, security and threat protection, fairness and equity, and transparency and explainability. Each pillar is a standalone Excel workbook containing 12 questions, 84 in total, and is built for clinical and regulatory reality.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '820px', fontSize: '0.95rem' }}>
            Every question states why it matters, rates the inherent risk if it goes unaddressed, and gives best-practice guidance, so a reviewer can tell what a strong control looks like instead of guessing. Behind each answer sits a formula: Yes, No, or Partial is combined with that inherent risk to produce a risk level, a score from 0 to 3, and a recommendation. A High-risk control left unaddressed is flagged for governance escalation within 30 days; a control that is fully in place scores zero and simply needs periodic verification.
          </p>

          <p style={{ ...eyebrow, marginTop: '1.75rem' }}>Inside each file</p>
          <div className={styles.anatomy}>
            {anatomy.map((a) => (
              <div key={a.title} className={styles.anatomyCell}>
                <span className={styles.sheetNum}>{a.num}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worksheets */}
      <section style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Seven Pillars</p>
          <h2 style={h2Style}>The worksheets</h2>
          <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '680px' }}>
            Run a full pass across all seven before a first deployment. Each file stands on its own, so you can also pull a single pillar into a focused review.
          </p>

          {worksheets.map((ws) => (
            <div key={ws.file} className={styles.worksheet}>
              <div className={styles.wsTop}>
                <h3>{ws.title}</h3>
                <span className={styles.wsId}>{ws.ids}</span>
              </div>
              <div className={styles.functions}>
                {ws.functions.map((fn) => (
                  <span key={fn} className={styles.fn}>{fn}</span>
                ))}
              </div>
              <p className={styles.wsDesc}>{ws.description}</p>
              <ul className={styles.checkpoints}>
                {ws.checkpoints.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a href={`/downloads/risk/${ws.file}`} download className={styles.download}>
                Download workbook (.xlsx) →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>Workflow</p>
          <h2 style={h2Style}>Running an assessment</h2>
          <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem' }}>
            {workflow.map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#d0d8e4', flexShrink: 0, minWidth: '3rem', lineHeight: 1 }}>{step.n}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.35rem', fontWeight: 600 }}>{step.title}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework alignment */}
      <section style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Regulatory Coverage</p>
          <h2 style={h2Style}>What the questions align to</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '820px', marginBottom: '2rem', fontSize: '0.95rem' }}>
            The NIST mapping sheet is the primary traceability mechanism. The question content also reflects requirements drawn from a wider set of healthcare and AI governance regimes, so a single assessment supports several compliance conversations at once.
          </p>
          <div className="grid-2col" style={{ borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', background: '#fff' }}>
            {frameworks.map((fw) => (
              <div key={fw} style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                {fw}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Main>
  );
}
