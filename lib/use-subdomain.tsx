import {useEffect, useState} from 'preact/hooks';

export const useSubdomain = (): string | null => {
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hostname = window.location.hostname;
    const search = window.location.search;
    let currentSubdomain: string | null = null;

    const urlParams = new URLSearchParams(search);
    const subdomainParam = urlParams.get('subdomain');

    if (subdomainParam) {
      currentSubdomain = subdomainParam;
    } else if (hostname) {
      const parts = hostname.split('.');
      if (parts.length === 3) {
        [currentSubdomain] = parts;
      }
    }

    setSubdomain(currentSubdomain);
  }, []);

  return subdomain;
};
