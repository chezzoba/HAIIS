export const meta = {
  title: 'Remote Patient Monitoring',
  subtitle: 'Realtime monitoring of patients in nonclinical settings with data streams and realtime AI',
  author: 'Kaizad Wadia',
  published: 'August 5, 2025',
  source: 'Builder Hub',
  sourceUrl: 'https://builder.aws.com/content/2boovYC5RwbKgyoGqikH0w1TP99/revolutionizing-remote-patient-monitoring-with-cloud-and-ai',
  clouds: ['AWS'],
  previewImage: '/img/blogs/irpm.webp',
};

export default function Content() {
  return (
    <>
      <p>
        Remote patient monitoring (RPM), though having many recent breakthroughs, is not a modern concept. It is a
        catch-all concept that describes any way a patient can be monitored outside of the clinical setting, and has
        been around for decades, starting from the 1940s when X-Ray images were sent via telephone lines. Now in the
        modern day it has developed to encompass a suite of devices and digital solutions including wearable devices
        and modern fitness smartphone applications.
      </p>
      <p>
        RPM can have broad implications, including improved care access (especially for patients in remote or
        underserved areas), better care for patients with chronic conditions, and reduced hospital readmissions by
        allowing timely interventions outside the clinical setting. Developments in cloud computing and artificial
        intelligence have accelerated what is possible here, enabling faster innovation cycles and more
        sophisticated clinical decision support. What we discuss in this article lies at the intersection of these
        breakthroughs.
      </p>

      <h2>Background</h2>
      <p>
        Recent attempts at similar solutions push the boundaries of real-time healthcare. In academia, there were
        several notable developments, including a{' '}
        <a href="https://jdit.sciforce.org/JDIT/article/view/244" target="_blank" rel="noopener noreferrer">scalable framework for AI-driven RPM</a>{' '}
        developed by Cognizant Technology Solutions in January 2025, as well as a paper on an{' '}
        <a href="https://arxiv.org/html/2501.01027v1" target="_blank" rel="noopener noreferrer">RPM solution that leverages 5G networks to get latency down to the low double digits</a>,
        published in March 2025.
      </p>
      <p>
        Latency here is of paramount importance. When the average response time of emergency services in urban areas
        of the United States is 8 to 12 minutes, every second counts. Here, we explore a real-world solution that
        displays a real-time patient monitoring dashboard with intelligent clinical notifications.
      </p>

      <h2>Architectural Design Philosophy</h2>
      <p>
        The solution follows a hybrid edge-cloud model that balances real-time clinical needs with security and
        compliance. A low-cost edge device collects vital signs locally while the cloud handles heavy lifting
        through managed IoT ingestion, real-time streaming analytics, and serverless compute. Security is a top
        priority: end-to-end encryption, least-privilege access controls, and network isolation protect sensitive
        health data at every layer.
      </p>
      <p>
        The cloud backbone manages device fleet connectivity, handles real-time data ingestion at scale, and runs
        streaming analytics that enrich raw vitals with patient context. A patient profile store personalises risk
        assessments, while automated certificate rotation and TLS encryption keep data safe in transit. The solution
        is served through a custom domain with SSL termination behind a CDN distribution, ensuring low-latency
        access for clinical staff regardless of location.
      </p>
      <p>
        The real-time patient dashboard is a web application hosted in a containerised environment, consuming data
        directly from the stream. Clinical notifications are dispatched through a managed pub/sub service, enabling
        multi-channel alerting to care teams.
      </p>

      <h2>System Architecture</h2>
      <p>
        The edge device acts as an intelligent sensor hub, using a pulse oximeter to capture heart rate and blood
        oxygen saturation. A local data pipeline filters noise, smooths readings, and validates measurements against
        physiological norms before transmitting to the cloud. A simulation mode allows testing of alert scenarios
        without physical hardware, which is critical for validating clinical thresholds during development.
      </p>
      <p>
        The device communicates over a standard IoT protocol using an SDK that handles connection management,
        certificate-based authentication, and reliable message delivery. The wiring setup uses a{' '}
        <a href="https://github.com/vrano714/max30102-tutorial-raspberrypi" target="_blank" rel="noopener noreferrer">standard I2C connection</a>,
        keeping the hardware footprint minimal and reproducible.
      </p>
      <img src="/img/blogs/inline/rpm-sensor-wiring.webp" alt="Sensor wiring setup with Raspberry Pi" style={{width:'auto', maxWidth:'320px', display:'block', borderRadius:'6px', margin:'1rem 0'}} />

      <h2>Intelligent Analytics</h2>
      <p>
        A real-time AI algorithm determines personalised risk scores and clinical indices by combining current vitals
        from the edge device with longitudinal patient history from the profile store. The system detects anomalies
        using circadian rhythm baselines, accounting for the fact that a heart rate of 95 bpm means something
        different at 3am than at 3pm, and triggers multi-channel alerts to care teams when thresholds are breached.
      </p>
      <p>
        The dashboard surfaces AI-generated natural language summaries alongside raw metrics, giving clinicians
        actionable context without requiring manual interpretation of the data. Alerts are deduplicated within a
        rolling time window to prevent alert fatigue, a well-documented problem in clinical environments.
      </p>
      <img src="/img/blogs/inline/rpm-alert.webp" alt="Intelligent clinical alert example" style={{width:'auto', maxWidth:'280px', display:'block', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        The analytics function processes incoming vitals in real-time, enriches them with patient context, and
        places the result onto a second stream consumed by the dashboard. Clinical notification processing runs as a
        separate concern, keeping alert logic decoupled from the analytics pipeline.
      </p>
      <img src="/img/blogs/inline/rpm-realtime-stream.webp" alt="Real-time data stream on dashboard" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />

      <h2>Real-World Performance</h2>
      <img src="/img/blogs/inline/rpm-dashboard.webp" alt="Real-time patient monitoring dashboard" style={{width:'100%', borderRadius:'6px', margin:'1rem 0'}} />
      <p>
        While academic benchmarks target latencies under 20ms, this system achieves 60–200ms end-to-end in
        production, a strong result for real-world deployments where network variability, device firmware, and
        cloud scheduling all introduce jitter. During simulated emergencies, the system maintained sub-second alert
        delivery while running complex personalised analytics concurrently.
      </p>
      <p>
        Two key optimisations drive the low-latency performance. First,{' '}
        <a href="https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html" target="_blank" rel="noopener noreferrer">provisioned concurrency</a>{' '}
        on the analytics function eliminates cold start delays, keeping complex enrichment in the low double-digit
        millisecond range. Second,{' '}
        <a href="https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html" target="_blank" rel="noopener noreferrer">enhanced fan-out</a>{' '}
        on the data stream pushes records to consumers rather than requiring them to poll, reducing the time between
        ingestion and processing.
      </p>
      <p>
        The RPM solution demonstrates that AI and cloud infrastructure have moved well beyond abstract concepts.
        They are becoming the operational backbone of real-world health solutions. With a measured average
        end-to-end latency of ~100ms including edge network overhead, this architecture shows what is achievable
        today. Healthcare innovators are invited to build on these patterns and extend quality care beyond the
        hospital walls.
      </p>
    </>
  );
}
