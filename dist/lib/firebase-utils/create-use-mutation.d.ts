import { User } from 'firebase/auth';
interface MutationOptions<RequestData> {
    method?: 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'GET';
    getCacheUpdateKeys?: (requestData: RequestData) => string[];
    waitForCacheRefresh?: boolean;
}
type FetchFunction<RequestData, ResponseData> = (requestData: RequestData) => Promise<ResponseData>;
export declare const createUseMutation: (fetcher: any, useFirebase: () => {
    user: User | null;
}) => <RequestData, ResponseData>(urlFn: (requestData: RequestData) => string, options?: MutationOptions<RequestData>) => [fetchFn: FetchFunction<RequestData, ResponseData>];
export {};
