import { AxiosDataFetcher } from '@sitecore-jss/sitecore-jss-nextjs';
import { UseQueryResult, useQuery } from 'react-query';
import { GRAPH_QL_ENDPOINT } from 'src/utils/contants';
import { SearchQueryPayload, SearchResponse } from './search.types';

const useSearch = <T>(queryPayload?: SearchQueryPayload): UseQueryResult<SearchResponse<T>> => {
  return useQuery({
    queryKey: [JSON.stringify(queryPayload)],
    enabled: Boolean(queryPayload),
    queryFn: async () => {
      (await new AxiosDataFetcher().post(GRAPH_QL_ENDPOINT as string, queryPayload)) as T;
    },
  });
};

export default useSearch;
