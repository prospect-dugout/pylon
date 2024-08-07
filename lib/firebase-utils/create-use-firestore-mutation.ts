import {useState} from 'preact/hooks';
import {doc, getDoc, setDoc} from '@firebase/firestore';
import {useSWRConfig} from 'swr';

type UseMutation = <params, _body, _ResData>(
  _urlFn: (params: params) => string,
) => {
  data: _ResData | undefined;
  error: any;
  loading: boolean;
  mutationFn: (_props: {
    body: _body;
    dontMutate?: boolean;
    params?: params;
  }) => Promise<void>;
};

type UseFirestoreMutationFn = (_props: {
  body: any;
  dontMutate?: boolean;
  params?: any;
}) => Promise<void>;

export const createUseFirestoreMutation = (useFirebase: any) => {
  const useFirestoreMutation: UseMutation = (urlFn) => {
    const {mutate} = useSWRConfig();
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>();
    const {user, db} = useFirebase();

    const mutationFn: UseFirestoreMutationFn = async ({
      body,
      dontMutate = false,
      params,
    }) => {
      setError(null);

      try {
        if (!user) {
          throw new Error('Not logged in');
        }

        const _ref = doc(db, urlFn(params));
        setDoc(_ref, body, {merge: true});
        const _data = await (await getDoc(_ref)).data();

        setData(_data);
      } catch (_error: any) {
        setError(_error);
        throw _error;
      }

      if (!dontMutate) {
        mutate(urlFn(params));
      }
    };

    return {mutationFn, data, loading: !error && !data, error};
  };

  return useFirestoreMutation;
};
