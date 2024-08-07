// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../global.d.ts" />
import {useEffect} from 'preact/hooks';

/* interface Options {
  initWithPageView?: boolean;
} */

export const useGoogleAnalytics = (
  trackingIds: string[],
  /* {initWithPageView = false}: Options, */
) => {
  useEffect(() => {
    if (trackingIds.length === 0) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    window.gtag('js', new Date());

    let gtagScriptExists = false;

    for (const gtagId of trackingIds) {
      window.gtag('config', gtagId);

      if (!gtagScriptExists) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
        document.head.appendChild(script);
        gtagScriptExists = true;
      }
    }
  }, [trackingIds]);
};
