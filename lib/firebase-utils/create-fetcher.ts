import {User} from '@firebase/auth';
import {ensureLeadingSlash} from '../utils';

export const createFetcher = (functionsUrl: string) => {
  return async function fetcher(
    url: string,
    {user, method = 'GET', ...props}: RequestInit & {user: User | null},
  ) {
    const res = await fetch(`${functionsUrl}${ensureLeadingSlash(url)}`, {
      method,
      ...props,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        ...(user ? {Authorization: `Bearer ${await user.getIdToken()}`} : {}),
        ...(props.headers || null),
      },
    });

    if (res.ok) {
      return await res.json();
    } else {
      const data = await res.json();
      throw new Error(data?.message || 'Something went wrong');
    }
  };
};
