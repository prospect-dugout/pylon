import {Firestore, doc, getDoc} from '@firebase/firestore';
import useSWR from 'swr';

export type UseFirestoreQueryOptions = {skip?: boolean};

type UseFirestoreQuery = <S>(
  key: string,
  _opts?: UseFirestoreQueryOptions,
) => {data: S; error: any; loading: boolean};

export const createUseFirestoreQuery = (useFirebase: any) => {
  const useFirestoreQuery: UseFirestoreQuery = (key, opts = {skip: false}) => {
    const {user, db} = useFirebase();
    const {data, error} = useSWR(!!user && !opts.skip ? key : null, (url) =>
      firestoreFetcher({db, path: url}),
    );

    return {
      data: data as any,
      loading: !opts.skip && !error && data === undefined,
      error: error,
    };
  };

  return useFirestoreQuery;
};

async function firestoreFetcher({db, path}: {db: Firestore; path: string}) {
  const _ref = doc(db, path);
  const _data = await (await getDoc(_ref)).data();
  return _data || null;
}
