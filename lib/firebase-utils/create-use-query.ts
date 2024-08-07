import useSWR from 'swr';

export type UseQueryOptions = {defaultData?: any; skip?: boolean};

type UseQuery = <S>(
  key: string,
  _opts?: UseQueryOptions,
) => {data: S; error: any; loading: boolean};

export const createUseQuery = (fetcher: any, useFirebase: any) => {
  const useQuery: UseQuery = (key, opts = {skip: false}) => {
    const {user} = useFirebase();
    const {data, error, isLoading} = useSWR(
      /* !!user &&  */ !opts.skip ? key : null,
      (url) => fetcher(url, {user: user || null}),
    );

    return {
      data: data || opts?.defaultData,
      loading: isLoading,
      error: error,
    };
  };

  return useQuery;
};
