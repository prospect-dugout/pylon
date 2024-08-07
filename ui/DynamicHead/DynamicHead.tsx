import {FunctionalComponent} from 'preact';
import {useLayoutEffect} from 'preact/hooks';

type Props = {
  title: string;
  htmlAttributes?: Record<string, string>;
  meta?: Array<Record<string, string>>;
  link?: Array<Record<string, string>>;
};

export const DynamicHead: FunctionalComponent<Props> = (props: Props) => {
  useLayoutEffect(() => {
    const head = document.head;
    const html = head.querySelector('html');

    const titleElement = document.createElement('title');
    titleElement.innerText = props.title;
    head.appendChild(titleElement);

    if (html && props.htmlAttributes) {
      Object.keys(props.htmlAttributes).forEach((key: string) => {
        if (props.htmlAttributes) {
          html.setAttribute(key, props.htmlAttributes[key]);
        }
      });
    }
    props.meta?.forEach((metaTag) => {
      const metaElement = document.createElement('meta');
      Object.keys(metaTag).forEach((key) => {
        metaElement.setAttribute(key, metaTag[key]);
      });
      head.appendChild(metaElement);
    });

    props.link?.forEach((linkTag) => {
      const linkElement = document.createElement('link');
      Object.keys(linkTag).forEach((key) => {
        linkElement.setAttribute(key, linkTag[key]);
      });
      head.appendChild(linkElement);
    });
  }, []);

  return null;
};
