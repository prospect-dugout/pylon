const baseURLFFMPEG = 'https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/umd';
const baseURLCore = 'https://unpkg.com/@ffmpeg/core@0.12.3/dist/umd';
const baseURLCoreMT = 'https://unpkg.com/@ffmpeg/core-mt@0.12.3/dist/umd';

const toBlobURLPatched = async (
  url: string,
  mimeType: string,
  patcher: any,
) => {
  const resp = await fetch(url);
  let body = await resp.text();
  if (patcher) {
    body = patcher(body);
  }
  const blob = new Blob([body], {type: mimeType});
  return URL.createObjectURL(blob);
};

const toBlobURL = async (url: string, mimeType: string) => {
  const resp = await fetch(url);
  const body = await resp.blob();
  const blob = new Blob([body], {type: mimeType});
  return URL.createObjectURL(blob);
};

let loaded = false;
export const loadFFmpeg = async () => {
  if (loaded) return new window.FFmpegWASM.FFmpeg();
  const ffmpegBlobURL = await toBlobURLPatched(
    `${baseURLFFMPEG}/ffmpeg.js`,
    'text/javascript',
    (js: string) => js.replace('new URL(e.p+e.u(814),e.b)', 'r.workerLoadURL'),
  );
  await import(ffmpegBlobURL);
  const ffmpeg = new window.FFmpegWASM.FFmpeg();
  loaded = true;

  // check if SharedArrayBuffer is supported via crossOriginIsolated global var
  // https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated
  if (window.crossOriginIsolated) {
    await ffmpeg.load({
      workerLoadURL: await toBlobURL(
        `${baseURLFFMPEG}/814.ffmpeg.js`,
        'text/javascript',
      ),
      coreURL: await toBlobURL(
        `${baseURLCoreMT}/ffmpeg-core.js`,
        'text/javascript',
      ),
      wasmURL: await toBlobURL(
        `${baseURLCoreMT}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
      workerURL: await toBlobURL(
        `${baseURLCoreMT}/ffmpeg-core.worker.js`,
        'application/javascript',
      ),
    } as any);
  } else {
    await ffmpeg.load({
      workerLoadURL: await toBlobURL(
        `${baseURLFFMPEG}/814.ffmpeg.js`,
        'text/javascript',
      ),
      coreURL: await toBlobURL(
        `${baseURLCore}/ffmpeg-core.js`,
        'text/javascript',
      ),
      wasmURL: await toBlobURL(
        `${baseURLCore}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    } as any);
  }
  return ffmpeg;
};
