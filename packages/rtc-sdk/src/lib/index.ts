import { test } from './test';

export function testSdk(): string {
  console.log('=========test sdk');

  startWorker();
  test();

  return 'test-sdk';
}

export function startWorker() {
  // @ts-ignore
  const worker = new Worker(new URL('./worker.ts', import.meta.url), {
    type: 'module',
  });
  // usage case2:
  // const worker = new MyWorker();

  worker.onmessage = (event) => {
    console.log(`Received message from worker: ${event.data}`);
  };

  worker.postMessage('Hello from main thread');
}
