import {FFmpeg} from '@ffmpeg/ffmpeg';
import {fetchFile, toBlobURL} from '@ffmpeg/util';
import {makeid} from '../../lib';

export const toTimeString = (sec: number, showMilliSeconds = true) => {
  let hours: string | number = Math.floor(sec / 3600);
  let minutes: string | number = Math.floor((sec - hours * 3600) / 60);
  let seconds: string | number = sec - hours * 3600 - minutes * 60;
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  // matches the decimal point and the digits after it e.g if the number is 4.567 it matches .567
  const maltissaRegex = /\..*$/;
  const millisec = String(seconds).match(maltissaRegex);
  return (
    hours +
    ':' +
    minutes +
    ':' +
    String(seconds).replace(maltissaRegex, '') +
    (showMilliSeconds ? (millisec ? millisec[0] : '.000') : '')
  );
};

type TrimVideoProps = {
  end: number;
  ffmpeg: FFmpeg;
  start: number;
  videoFile: File;
};

export async function trimVideo({
  end,
  ffmpeg,
  start,
  videoFile,
}: TrimVideoProps) {
  await ffmpeg.writeFile(videoFile.name, await fetchFile(videoFile));
  const outputTempName = `${makeid(8)}.mp4`;

  // FFmpeg command to trim the video
  // This uses the `-ss` parameter for the start time, `-to` for the end time,
  // and `-c copy` to avoid re-encoding the video which makes the command run faster.
  await ffmpeg.exec([
    '-ss',
    toTimeString(start),
    '-i',
    videoFile.name,
    '-t',
    toTimeString(end - start),
    '-c',
    'copy',
    outputTempName,
  ]);

  // Read the trimmed video file from FFmpeg's virtual file system
  const data = (await ffmpeg.readFile(outputTempName)) as Uint8Array;

  // Create a Blob URL for the output video to be used in the <video> element
  const outputVideoUrl = URL.createObjectURL(
    new Blob([data.buffer], {type: 'video/mp4'}),
  );

  // Optionally, if you want to make the trimmed video file available for download or further processing:
  const outputVideo = new File([data.buffer], outputTempName, {
    type: 'video/mp4',
  });
  return {outputVideo, outputVideoUrl};
}

export async function loadFFmpeg(ffmpeg: FFmpeg) {
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';

  // toBlobURL is used to bypass CORS issue, urls with the same domain can be used directly.
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });
}
