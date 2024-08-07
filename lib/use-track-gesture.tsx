import {RefObject} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {off, on} from './utils';

export interface TrackEventData {
  dx: number;
  dy: number;
  startX: number;
  startY: number;
  targetRect: DOMRect;
}

export interface TrackGestureOptions {
  onTrack: (data: TrackEventData) => void;
  onTrackEnd: () => void;
  orientation?: 'horizontal' | 'vertical';
  target: Element;
  trackOnPointerDown?: boolean;
}

export class TrackGesture {
  private readonly onTrack: (data: TrackEventData) => void;
  private readonly onTrackEnd: () => void;
  private readonly orientation: string;
  private readonly target: Element;
  private readonly trackOnPointerDown: boolean;
  private readonly trackThreshold = 4;
  private trackStarted = false;
  private targetRect: DOMRect | null = null;
  private clientStartX = 0;
  private clientStartY = 0;

  constructor({
    onTrack,
    onTrackEnd,
    orientation = 'horizontal',
    target,
    trackOnPointerDown = true,
  }: TrackGestureOptions) {
    if (!target || !(target instanceof Element)) {
      throw new Error('TrackGesture needs a valid DOM Element as a target');
    }

    this.onTrack = onTrack;
    this.onTrackEnd = onTrackEnd;
    this.orientation = orientation;
    this.target = target;
    this.trackOnPointerDown = trackOnPointerDown;

    on(this.target, 'pointerdown', this.onPointerDown);
  }

  disposal = (): void => {
    off(this.target, 'pointerdown', this.onPointerDown);
    this.stopTrack();
  };

  private onPointerDown = (evt: Event) => {
    const {clientX, clientY} = evt as PointerEvent;
    this.setupTrackStyles();
    this.targetRect = this.target.getBoundingClientRect();
    this.clientStartX = clientX;
    this.clientStartY = clientY;
    this.addTrackListeners();

    if (this.trackOnPointerDown) {
      this.dispatchTrackEvent(clientX, clientY);
    }
  };

  private onPointerMove = (evt: Event) => {
    const {clientX, clientY} = evt as PointerEvent;
    if (this.trackStarted) {
      evt.stopPropagation();
      evt.preventDefault();
      this.dispatchTrackEvent(clientX, clientY);
    } else if (
      ((!this.orientation || this.orientation === 'horizontal') &&
        Math.abs(this.clientStartX - clientX) > this.trackThreshold) ||
      ((!this.orientation || this.orientation === 'vertical') &&
        Math.abs(this.clientStartY - clientY) > this.trackThreshold)
    ) {
      this.trackStarted = true;
    }
  };

  private onPointerUp = () => {
    this.stopTrack();
    this.onTrackEnd?.();
  };

  private dispatchTrackEvent = (clientX: number, clientY: number) => {
    if (!this.targetRect) return;
    this.onTrack?.({
      dx: clientX - this.clientStartX,
      dy: clientY - this.clientStartY,
      startX: this.clientStartX - this.targetRect.left,
      startY: this.clientStartY - this.targetRect.top,
      targetRect: this.targetRect,
    });
  };

  private stopTrack = () => {
    this.removeTrackListeners();
    this.resetTrackStyles();
    this.clientStartX = 0;
    this.clientStartY = 0;
    this.trackStarted = false;
    this.targetRect = null;
  };

  private setupTrackStyles() {
    document.body.setAttribute('draggable', 'false');
    document.body.style.userSelect = 'none';
    document.body.style.touchAction = 'none';
  }

  private resetTrackStyles() {
    document.body.removeAttribute('draggable');
    document.body.style.userSelect = '';
    document.body.style.touchAction = '';
  }

  private addTrackListeners = () => {
    on(document, 'pointermove', this.onPointerMove);
    on(document, 'pointerup', this.onPointerUp);
    on(document, 'contextmenu', this.onPointerUp);
  };

  private removeTrackListeners = () => {
    off(document, 'pointermove', this.onPointerMove);
    off(document, 'pointerup', this.onPointerUp);
    off(document, 'contextmenu', this.onPointerUp);
  };
}

type TrackGestureState = {
  dx: number;
  dy: number;
  startX: number;
  startY: number;
  targetRect: DOMRect | null;
  dragging: boolean;
};

const initialState: TrackGestureState = {
  dx: 0,
  dy: 0,
  startX: 0,
  startY: 0,
  targetRect: null,
  dragging: false,
};

export const useTrackGesture = (
  targetRef: RefObject<HTMLElement>,
  options = {},
) => {
  const [state, setState] = useState<TrackGestureState>(initialState);

  useEffect(() => {
    let disposal: TrackGesture['disposal'] | null = null;

    if (targetRef.current) {
      disposal = new TrackGesture({
        onTrack: ({dx, dy, startX, startY, targetRect}) => {
          setState({dx, dy, startX, startY, targetRect, dragging: true});
        },
        onTrackEnd: () => {
          setState({...initialState});
        },
        target: targetRef.current,
        ...options,
      }).disposal;
    }

    return () => {
      disposal?.();
      setState({...initialState});
    };
  }, [options, targetRef]);

  return state;
};
