const todoListSection = document.getElementById('todo-list');
const addToDoForm = document.getElementById('add-todo-form');
addToDoForm.addEventListener('submit', (event) => handleTodoSubmit(event));

const generateTodoElement = () => {
  const article = document.createElement('article');
  article.className = 'todo-item';
  article.innerHTML = `
  <h2 class="todo-title"></h2>
  <div class="todo-date-time">
    <p class="todo-date"></p>
    <p class="todo-time"></p>
  </div>
  <div class="todo-controls">
      <button class="button primary-button">Edit</button>
      <button class="button secondary-button">Delete</button>
  </div>
  `;
  return article;
};

getToDoData = (formData) => {
  return Object.fromEntries(formData.entries());
};

const fillTodoData = (todoData, todoElement) => {
  for (key in todoData) {
    todoElement.querySelector(`.${key}`).textContent = todoData[key];
  }
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const todoElement = generateTodoElement();
  const todoData = getToDoData(formData);
  fillTodoData(todoData, todoElement);
  todoListSection.appendChild(todoElement);
  addToDoForm.reset();
};
