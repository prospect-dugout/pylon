import {useEffect, useState} from 'preact/hooks';
import {off, on} from './utils';

const replaceHistory = (queryParams: URLSearchParams) => {
  const queryString = queryParams.toString();
  window.history.pushState('', '', '?' + queryString);
};

const getSearchParams = () => new URLSearchParams(window.location.search);

type SetParamFn = (_key: string, _value: string) => void;
type RemoveParamFn = (_key: string) => void;
type UseQueryParamsResp = {
  queryParams: {[key: string]: string};
  setQP: SetParamFn;
  removeQP: RemoveParamFn;
};

type ValidatorFn = (_value: string) => boolean;
type Validators = Record<string, ValidatorFn>;

export const useSearchParams = (
  keys: string[],
  defaultValues?: Record<string, string>,
  {validators}: {validators?: Validators} = {},
): UseQueryParamsResp => {
  const [queryParams, setQueryParams] =
    useState<URLSearchParams>(getSearchParams());

  const setQP: SetParamFn = (key, value) => {
    queryParams.set(key, value);
    replaceHistory(queryParams);
    setQueryParams(getSearchParams());
  };

  const removeQP: RemoveParamFn = (key) => {
    queryParams.delete(key);
    replaceHistory(queryParams);
    setQueryParams(getSearchParams());
  };

  useEffect(() => {
    if (defaultValues) {
      keys.forEach((key) => {
        if (!queryParams.has(key) && defaultValues[key]) {
          setQP(key, defaultValues[key]);
        }
      });
    }
  }, [defaultValues]);

  useEffect(() => {
    const onChange = () => {
      setQueryParams(getSearchParams());
    };

    on(window, 'popstate', onChange);
    on(window, 'pushstate', onChange);
    on(window, 'replacestate', onChange);
    return () => {
      off(window, 'popstate', onChange);
      off(window, 'pushstate', onChange);
      off(window, 'replacestate', onChange);
    };
  }, []);

  return {
    queryParams: keys.reduce((acc: any, key: string) => {
      let value =
        (queryParams.has(key) ? queryParams.get(key) : defaultValues?.[key]) ||
        '';
      if (validators && validators[key] && !validators[key](value)) {
        value = defaultValues?.[key] || '';
        setQP(key, value);
      }
      acc[key] = value;
      return acc;
    }, {}),
    setQP,
    removeQP,
  };
};
