export const dynamic = 'force-static'

const BASE_URL = 'https://haiis.org';

// Dynamic slug routes — keep in sync with publications.json files
const patternSlugs = [
  'remote-patient-monitoring',
  'production-ready-ai-agents',
  'resilient-serverless-messaging',
];

const governanceSlugs = [
  'evaluating-search-systems',
  'multi-cloud-data-governance',
];

const playbookSlugs = [
  'compliant-cicd-deployments',
  'automating-cloud-development-workflows',
];

export default function sitemap() {
  const staticRoutes = [
    { url: `${BASE_URL}`,                             changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/about`,                       changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/framework`,                   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/collaborate`,                 changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/documentation`,               changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/documentation/patterns`,      changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/documentation/governance`,    changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/documentation/playbooks`,     changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/documentation/risk`,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/documentation/security`,      changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/documentation/glossary`,      changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                     changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const patternRoutes = patternSlugs.map((slug) => ({
    url: `${BASE_URL}/documentation/patterns/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const governanceRoutes = governanceSlugs.map((slug) => ({
    url: `${BASE_URL}/documentation/governance/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const playbookRoutes = playbookSlugs.map((slug) => ({
    url: `${BASE_URL}/documentation/playbooks/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...patternRoutes,
    ...governanceRoutes,
    ...playbookRoutes,
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}

