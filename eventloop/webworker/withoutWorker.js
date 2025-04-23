const newPara = document.createElement('p');
newPara.textContent = 'Paragraph Content';
const container = document.getElementsByClassName('container');
container[0].appendChild(newPara);

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
const heading = document.getElementById('main-heading');
heading.textContent += `Result from worker:', ${sum}`;
