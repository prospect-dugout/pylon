import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {useEffect, useRef} from 'preact/hooks';
import useMousePosition from '../../lib/use-mouse-position';
import {distance} from '../../lib/utils';

type Props = {
  children: ComponentChildren;
  distanceMultiplier?: number;
};

export const Magnetic: FunctionalComponent<Props> = ({
  children,
  distanceMultiplier = 1.125,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);
  const {mouseX, mouseY} = useMousePosition();

  useEffect(() => {
    if (ref.current && mouseX !== null && mouseY !== null) {
      const node = ref.current;
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * distanceMultiplier;
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );

      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        const x =
          (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.25;
        const y =
          (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.25;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        draggingRef.current = true;
      } else {
        // Restore initial position
        draggingRef.current = false;
        // trasnform to 0,0,0
        node.style.transform = `translate3d(0, 0, 0)`;
      }
    }
  }, [mouseX, mouseY, ref]);

  return (
    <div
      ref={ref}
      css={`
        display: inline-flex;
        transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
        will-change: transform;
      `}
      {...props}
    >
      {children}
    </div>
  );
};
