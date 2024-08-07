import {Fragment, FunctionalComponent, h} from 'preact';
import {computedStyleValue} from '../../lib';
import {Anchor} from '../Anchor';
import {Icon} from '../Icon';

export interface Breadcrumb {
  href?: string;
  title: string;
}

type Props = {
  items: Breadcrumb[];
};

export const Breadcrumbs: FunctionalComponent<Props> = ({
  items,
  ...restProps
}: Props) => {
  return (
    <div
      css={`
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        font-size: var(--breadcrums-font-size, var(--font-size-default));
        font-weight: var(--font-weight-bold);
        margin: 0 0 1.5rem 0;
      `}
      {...restProps}
    >
      {items.map(({href, title}, idx) => (
        <Fragment key={title}>
          {href ? (
            <Anchor
              href={href}
              css={`
                color: var(--fg-subtle);
                margin: ${idx ? '0 .5rem' : '0 .5rem 0 0'};
              `}
            >
              {title}
            </Anchor>
          ) : (
            <div
              css={`
                color: var(--fg-default);
                margin: ${idx ? '0 .5rem' : 0};
              `}
            >
              {title}
            </div>
          )}
          {idx !== items.length - 1 && (
            <Icon
              icon="chevron-forward"
              css-color="var(--fg-subtle)"
              size={
                Number(computedStyleValue('var(--breadcrums-icon-size)')) || 20
              }
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
