import { meta as rpmMeta, default as RPMContent } from './remote-patient-monitoring';
import { meta as agentsMeta, default as AgentsContent } from './production-ready-ai-agents';
import { meta as serverlessMeta, default as ServerlessContent } from './resilient-serverless-messaging';

export const articles = {
  'remote-patient-monitoring': { meta: rpmMeta, Content: RPMContent },
  'production-ready-ai-agents': { meta: agentsMeta, Content: AgentsContent },
  'resilient-serverless-messaging': { meta: serverlessMeta, Content: ServerlessContent },
};
