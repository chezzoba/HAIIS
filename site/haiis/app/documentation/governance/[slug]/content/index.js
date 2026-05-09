import { meta as searchMeta, default as SearchContent } from './evaluating-search-systems';
import { meta as multiCloudMeta, default as MultiCloudContent } from './multi-cloud-data-governance';

export const articles = {
  'evaluating-search-systems': { meta: searchMeta, Content: SearchContent },
  'multi-cloud-data-governance': { meta: multiCloudMeta, Content: MultiCloudContent },
};
