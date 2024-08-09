import { test } from 'libs/test';

self.onmessage = (event: any) => {
  console.log(`Received message from main thread: ${event.data}`);

  test();
  self.postMessage('Hello from worker');
};
