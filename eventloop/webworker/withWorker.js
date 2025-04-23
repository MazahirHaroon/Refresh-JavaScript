// Create the worker
const worker = new Worker('worker.js');

// Send data to worker
worker.postMessage(1000000000); // Large number for stress test

// Get result from worker
worker.onmessage = function (event) {
  const heading = document.getElementById('main-heading');
  heading.textContent += `Result from worker:', ${event.data}`;
};

const newPara = document.createElement('p');
newPara.textContent = 'Paragraph Content';
const container = document.getElementsByClassName('container')[0];
container.appendChild(newPara);

const customButton = document.getElementById('custom');
customButton.addEventListener(() => {
  const containerBgColor = container.style.backgroundColor;
  container.style.backgroundColor =
    containerBgColor === 'coral' ? 'salmon' : 'coral';
});
