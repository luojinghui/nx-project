self.onmessage = (event: any) => {
  console.log(`Received message from main thread: ${event.data}`);
  self.postMessage('Hello from worker');
};
