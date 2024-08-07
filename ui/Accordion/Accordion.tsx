import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import {css} from 'styled-components';
import {mediaQuery} from '../../lib/responsive';
import {Button} from '../Button';
import {Icon} from '../Icon';
import {Typography, typographyVariants} from '../Typography';

type Props = {
  children?: ComponentChildren;
  title?: string;
};

export const Accordion: FunctionalComponent<Props> = ({
  children,
  title,
  ...props
}: Props) => {
  const contentRef = useRef<HTMLDivElement>();
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      css={`
        border-radius: var(--radius-3);
        margin-bottom: 0.25rem;
        ${mediaQuery(
          'lg>',
          css`
            background: ${expanded ? 'var(--bg-minimal)' : ''};
          `,
        )}
      `}
      {...props}
    >
      <Button
        variant="unstyled"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
        css={`
          align-items: center;
          border-radius: var(--radius-3);
          color: var(--fg-default);
          display: flex;
          gap: var(--gap-4);
          justify-content: space-between;
          padding: var(--gap-4) 0;
          white-space: pre-wrap;
          width: 100%;

          &:hover svg {
            color: var(--fg-default);
          }

          ${mediaQuery(
            'lg>',
            css`
              padding: var(--gap-4) var(--gap-6);
              &:hover {
                background: var(--bg-minimal);
              }
            `,
          )}
        `}
      >
        <Typography
          tagName="h3"
          variant="subtitle1"
          weight="bold"
          css={`
            ${mediaQuery(
              'lg>',
              css`
                font-size: ${typographyVariants.h6.fontSize};
                font-weight: ${typographyVariants.h6.fontWeight};
                letter-spacing: ${typographyVariants.h6.letterSpacing};
              `,
            )}
          `}
        >
          {title}
        </Typography>
        <Icon
          icon="chevron-down"
          css={`
            color: var(--fg-muted);
            transition: transform 0.2s ease-in-out;
            transform: ${expanded ? 'rotate(180deg)' : ''};
          `}
        />
      </Button>
      <div
        css={`
          opacity: ${expanded ? 1 : 0};
          overflow: hidden;
          pointer-events: ${expanded ? 'all' : 'none'};
          transition: all 0.2s ease-in-out;
          visibility: ${expanded ? 'visible' : 'hidden'};
          height: ${expanded && contentRef.current
            ? `${contentRef.current.getBoundingClientRect().height}px`
            : '0'};
        `}
      >
        <Typography
          ref={(e: any) => {
            if (e?.base) {
              contentRef.current = e.base as HTMLDivElement;
            }
          }}
          variant="body1"
          css-color="var(--fg-subtle)"
          css={`
            line-height: var(--line-height-5);
            max-width: var(--breakpoint-md);
            padding: var(--gap-2) 0 var(--gap-6);

            & ul {
              padding-left: var(--gap-6);
              margin: var(--gap-6) 0;
            }

            ${mediaQuery(
              'lg>',
              css`
                padding: var(--gap-2) var(--gap-6) var(--gap-6);
              `,
            )}
          `}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
};
