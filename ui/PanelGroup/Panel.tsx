import {ComponentChildren, FunctionalComponent, h} from 'preact';

type InternalProps = {
  _panelSize?: number;
};

type Props = {
  children: ComponentChildren;
  tabName?: string;
};

export const Panel: FunctionalComponent<Props> = ({
  children,
  ...restProps
}: Props) => {
  const {_panelSize} = restProps as InternalProps;

  return (
    <div
      css={`
        display: flex;
        flex: ${_panelSize || 0} 0;
        background: var(--panel-group-bg, var(--bg-minimal));
      `}
    >
      {children}
    </div>
  );
};
