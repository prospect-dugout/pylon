import {User} from 'firebase/auth';
import {useSWRConfig} from 'swr';

interface MutationOptions<RequestData> {
  method?: 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'GET';
  getCacheUpdateKeys?: (requestData: RequestData) => string[];
  waitForCacheRefresh?: boolean;
}

type FetchFunction<RequestData, ResponseData> = (
  requestData: RequestData,
) => Promise<ResponseData>;

export const createUseMutation = (
  fetcher: any,
  useFirebase: () => {user: User | null},
) => {
  return function useMutation<RequestData, ResponseData>(
    urlFn: (requestData: RequestData) => string,
    options: MutationOptions<RequestData> = {method: 'POST'},
  ): [fetchFn: FetchFunction<RequestData, ResponseData>] {
    const {mutate} = useSWRConfig();
    const {user} = useFirebase();

    const fetchFn: FetchFunction<RequestData, ResponseData> = async (
      requestData,
    ) => {
      try {
        const {body} = requestData as any;
        const response = await fetcher(urlFn(requestData), {
          method: options.method || 'POST',
          user,
          ...(!!body && {
            body: JSON.stringify(body),
          }),
        });
        if (options.getCacheUpdateKeys) {
          const keys = options.getCacheUpdateKeys(requestData);
          const promises = keys.map((key) => mutate(key));
          if (options.waitForCacheRefresh) {
            await Promise.all(promises);
          }
        }
        return response as ResponseData;
      } catch (fetchError) {
        throw fetchError;
      }
    };

    return [fetchFn];
  };
};
