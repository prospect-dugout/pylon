export type UseQueryOptions = {
    defaultData?: any;
    skip?: boolean;
};
type UseQuery = <S>(key: string, _opts?: UseQueryOptions) => {
    data: S;
    error: any;
    loading: boolean;
};
export declare const createUseQuery: (fetcher: any, useFirebase: any) => UseQuery;
export {};
