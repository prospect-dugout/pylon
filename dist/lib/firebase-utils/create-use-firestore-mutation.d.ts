type UseMutation = <params, _body, _ResData>(_urlFn: (params: params) => string) => {
    data: _ResData | undefined;
    error: any;
    loading: boolean;
    mutationFn: (_props: {
        body: _body;
        dontMutate?: boolean;
        params?: params;
    }) => Promise<void>;
};
export declare const createUseFirestoreMutation: (useFirebase: any) => UseMutation;
export {};
