import { meta as cicdMeta, default as CICDContent } from './compliant-cicd-deployments';
import { meta as aiWorkflowsMeta, default as AIWorkflowsContent } from './automating-cloud-development-workflows';

export const articles = {
  'compliant-cicd-deployments': { meta: cicdMeta, Content: CICDContent },
  'automating-cloud-development-workflows': { meta: aiWorkflowsMeta, Content: AIWorkflowsContent },
};
