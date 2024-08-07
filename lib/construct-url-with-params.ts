export function constructUrlWithParams(
  path: string,
  queryParams: {[key: string]: string | number | undefined} = {},
): string {
  const queryString = Object.entries(queryParams)
    .filter(([, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          value as string | number,
        )}`,
    )
    .join('&');

  return `${path}${queryString ? '?' + queryString : ''}`;
}
