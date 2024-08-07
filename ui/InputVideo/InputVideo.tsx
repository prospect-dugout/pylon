import {FunctionalComponent, h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import {FFmpeg} from '@ffmpeg/ffmpeg';
import {useEffect} from 'react';
import {css} from 'styled-components';
import {Button} from '../Button';
import {Fieldset, FormSelect, FormSubmit} from '../Form';
import {Grid} from '../Grid';
import {InputRange} from '../InputRange';
import {Stack} from '../Stack';
import {VideoPlayer} from '../VideoPlayer';
import {InputVideo_InputArea} from './_InputArea';
import {loadFFmpeg, trimVideo} from './helpers';

type VideoMeta = {
  duration: number;
  videoWidth: number;
  videoHeight: number;
};

export type InputVideoProps = {
  allowedRatios?: string;
  hideRatioSelector?: boolean;
  onClear?: () => void;
  onFinish?: (props: {
    outputVideoUrl: string;
    outputVideo: File;
    ratio: string;
  }) => void;
  submitText?: string;
};

export const InputVideo: FunctionalComponent<InputVideoProps> = ({
  allowedRatios = '16:9,9:16,1:1',
  hideRatioSelector = false,
  onClear,
  onFinish,
  submitText = 'Next',
}: InputVideoProps) => {
  const ratios = allowedRatios.split(',').map((str) => {
    const [aspectWidth, aspectHeight] = str.split(':').map(Number);
    return {label: str, value: str, aspectWidth, aspectHeight};
  });
  const ffmpegRef = useRef<FFmpeg>(new FFmpeg());
  const videoRef = useRef<HTMLVideoElement>(null);
  const rangeRef = useRef<[number, number] | null>(null);
  const [trimming, setTrimming] = useState(false);
  const [ratio, setRatio] = useState(ratios[0]);
  const [inputVideo, setInputVideo] = useState<File | null>(null);
  const [inputVideoUrl, setInputVideoUrl] = useState<string | null>(null);
  const [inputVideoMeta, setInputVideoMeta] = useState<VideoMeta | null>(null);

  const clear = () => {
    setInputVideo(null);
    setInputVideoUrl(null);
    setInputVideoMeta(null);
    setTrimming(false);
    setRatio(ratios[0]);
    onClear?.();
  };

  const handleInputRangeChange = (range: [number, number]) => {
    if (!videoRef.current) return;
    rangeRef.current = range;
    videoRef.current.currentTime = range[0];
  };

  const startTrimming = async () => {
    if (!rangeRef.current || !inputVideo) return;
    setTrimming(true);
    const {outputVideo, outputVideoUrl} = await trimVideo({
      ffmpeg: ffmpegRef.current,
      start: rangeRef.current[0],
      end: rangeRef.current[1],
      videoFile: inputVideo,
    });
    onFinish?.({outputVideo, outputVideoUrl, ratio: ratio.value});
    console.log('outputVideo', outputVideo, outputVideoUrl);
    setTrimming(false);
  };

  const onTimeUpdate = () => {
    if (!videoRef.current || !rangeRef.current) return;
    const video = videoRef.current;
    const range = rangeRef.current;
    if (video.currentTime >= range[1] || video.currentTime < range[0]) {
      video.currentTime = range[0];
    }
  };

  const handleInputFileChange = async (file: File) => {
    setInputVideoMeta(null);
    if (file) {
      setInputVideo(file);
      setInputVideoUrl(URL.createObjectURL(file));
    } else {
      clear();
    }
  };

  const onLoadedMetadata = async (evt: Event) => {
    const el = evt.currentTarget as HTMLVideoElement;
    if (el.src !== inputVideoUrl) return;
    const videoWidth = el.videoWidth;
    const videoHeight = el.videoHeight;
    const duration = el.duration;

    // Calculate the aspect ratio of the loaded video
    const videoAspectRatio = videoWidth / videoHeight;

    // Find the closest matching predefined ratio
    let closestRatio = ratios[0];
    let minDifference = Math.abs(
      videoAspectRatio - ratios[0].aspectWidth / ratios[0].aspectHeight,
    );

    for (let i = 1; i < ratios.length; i++) {
      const currentRatio = ratios[i].aspectWidth / ratios[i].aspectHeight;
      const difference = Math.abs(videoAspectRatio - currentRatio);

      if (difference < minDifference) {
        closestRatio = ratios[i];
        minDifference = difference;
      }
    }

    // Set the state with the closest ratio and video metadata
    setRatio(closestRatio);
    rangeRef.current = [0, duration];
    setInputVideoMeta({duration, videoWidth, videoHeight});
  };

  useEffect(() => {
    if (!ffmpegRef.current.loaded) {
      console.log('loading ffmpeg');
      loadFFmpeg(ffmpegRef.current);
    }
  }, []);

  if (inputVideoUrl) {
    const paddingTopPercentage = (ratio.aspectHeight / ratio.aspectWidth) * 100;

    return (
      <div>
        <Grid cols="1fr 1fr" gap={6} alignItems="flex-start">
          <VideoPlayer
            ref={videoRef}
            key={inputVideoUrl}
            src={inputVideoUrl}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            containerCss={css`
              background: var(--black);
              border-radius: var(--radius-3);
              cursor: pointer;
              margin: 0 auto;
              overflow: hidden;
              padding-top: ${paddingTopPercentage}%;
              position: relative;
              width: 100%;
            `}
            css={`
              height: 100%;
              left: 0;
              object-fit: cover;
              position: absolute;
              top: 0;
              width: 100%;
            `}
          />
          <div
            css={`
              min-width: 0;
            `}
          >
            {!!inputVideoMeta && (
              <Stack direction="column" alignItems="stretch" gap={6}>
                <Fieldset label="Trim" fullWidth>
                  <InputRange
                    key={inputVideoMeta?.duration}
                    onChange={handleInputRangeChange}
                    deferOnChange
                    min={0}
                    max={inputVideoMeta?.duration || 0}
                    step={0.01}
                    minLength={1}
                  />
                </Fieldset>
                {!hideRatioSelector && (
                  <FormSelect
                    label="Crop"
                    fullWidth
                    defaultValue={ratio.label}
                    options={ratios}
                    onChange={(evt) => {
                      const selected = ratios.find(
                        (r) => r.label === evt.currentTarget.value,
                      )!;
                      setRatio(selected);
                    }}
                  />
                )}
              </Stack>
            )}
          </div>
        </Grid>
        <Stack justifyContent="space-between" css-mt={6}>
          <Button variant="muted" disabled={trimming} onClick={clear}>
            Back
          </Button>
          <FormSubmit
            variant="primary"
            submitting={trimming}
            onClick={startTrimming}
          >
            {submitText}
          </FormSubmit>
        </Stack>
      </div>
    );
  } else {
    return <InputVideo_InputArea onChange={handleInputFileChange} />;
  }
};
