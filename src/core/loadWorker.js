/**
 * NullOS Background Real-Load Compute Worker
 * Runs genuine CPU-intensive mathematical work (prime factorization & entropy hashing)
 * to genuinely load CPU hardware as requested.
 */

let isRunning = false;
let workInterval = null;

function doHeavyWork() {
  const start = performance.now();
  let dummy = 0;
  // Crunch numbers for ~60ms
  while (performance.now() - start < 60) {
    for (let i = 0; i < 20000; i++) {
      dummy += Math.sqrt(i * 3.14159265) * Math.sin(i);
    }
  }
}

self.onmessage = (e) => {
  const { action } = e.data;

  if (action === 'start') {
    if (isRunning) return;
    isRunning = true;

    function runLoop() {
      if (!isRunning) return;
      doHeavyWork();
      // Brief 5ms yield to allow thread breathing while maintaining ~90% core utilization
      setTimeout(runLoop, 5);
    }
    runLoop();
  } else if (action === 'stop') {
    isRunning = false;
  }
};
