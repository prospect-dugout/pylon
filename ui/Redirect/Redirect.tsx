import {FunctionalComponent} from 'preact';
import {useLocation} from 'preact-iso';
import {useEffect} from 'preact/hooks';

interface Props {
  to: string;
  replace?: boolean;
}

export const Redirect: FunctionalComponent<Props> = ({
  to,
  replace = false,
}: Props) => {
  const location = useLocation();
  useEffect(() => {
    location.route(to, replace);
  }, []);

  return null;
};
