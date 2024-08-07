type SetParamFn = (_key: string, _value: string) => void;
type RemoveParamFn = (_key: string) => void;
type UseQueryParamsResp = {
    queryParams: {
        [key: string]: string;
    };
    setQP: SetParamFn;
    removeQP: RemoveParamFn;
};
type ValidatorFn = (_value: string) => boolean;
type Validators = Record<string, ValidatorFn>;
export declare const useSearchParams: (keys: string[], defaultValues?: Record<string, string>, { validators }?: {
    validators?: Validators | undefined;
}) => UseQueryParamsResp;
export {};
