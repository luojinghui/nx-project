import XYRTC from '@xylink/xy-rtc-sdk';

export { XYRTC };

export function testSdk(): string {
  startWorker();
  return 'test-sdk';
}

export function startWorker() {
  const worker = new Worker(new URL('./worker.ts', import.meta.url));

  worker.onmessage = (event) => {
    console.log(`Received message from worker: ${event.data}`);
  };
  worker.postMessage('Hello from main thread');
}
