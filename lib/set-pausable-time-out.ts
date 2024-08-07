// https://stackoverflow.com/questions/3969475/javascript-pause-settimeout

export type SetPausebleTimeOutResp = {
  pause: () => void;
  resume: () => void;
};

export const setPausableTimeOut = (
  callback: () => void,
  delay: number,
): SetPausebleTimeOutResp => {
  let timerId: number | undefined;
  let start: number;
  let remaining = delay;

  const pause = function () {
    window.clearTimeout(timerId);
    timerId = undefined;
    remaining -= Date.now() - start;
  };

  const resume = function () {
    if (timerId) {
      return;
    }

    start = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };

  resume();

  return {pause, resume};
};
