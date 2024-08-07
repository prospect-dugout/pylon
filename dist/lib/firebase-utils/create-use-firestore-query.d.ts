export type UseFirestoreQueryOptions = {
    skip?: boolean;
};
type UseFirestoreQuery = <S>(key: string, _opts?: UseFirestoreQueryOptions) => {
    data: S;
    error: any;
    loading: boolean;
};
export declare const createUseFirestoreQuery: (useFirebase: any) => UseFirestoreQuery;
export {};
