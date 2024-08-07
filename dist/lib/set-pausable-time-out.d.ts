export type SetPausebleTimeOutResp = {
    pause: () => void;
    resume: () => void;
};
export declare const setPausableTimeOut: (callback: () => void, delay: number) => SetPausebleTimeOutResp;
