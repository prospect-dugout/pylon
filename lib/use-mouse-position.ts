// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import {useEffect, useState} from 'preact/hooks';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    mouseX: null,
    mouseY: null,
  });

  const updateMousePosition = (evt: any) => {
    setMousePosition({mouseX: evt.clientX, mouseY: evt.clientY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
}
