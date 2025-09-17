
const form = document.querySelector('.js--form');
const todoInput = document.querySelector('.js--form__input');
const todoList = document.querySelector('.js--todos-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => renderTodoItem(todo));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  if (todoText) {
    const todo = {
      text: todoText,
      checked: false
    };
    renderTodoItem(todo);
    saveTodoToLocalStorage(todo);
    todoInput.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  const target = event.target;
  const todoItem = target.closest('.todo-item');

  if (!todoItem) return;

  if (target.classList.contains('todo-item__delete')) {
    const todoText = todoItem.querySelector('.todo-item__description').textContent;
    removeTodoFromLocalStorage(todoText);
    todoItem.remove();
  }

  if (target.type === 'checkbox' || target.classList.contains('todo-item__description')) {
    todoItem.classList.toggle('todo-item--checked');
    const isChecked = todoItem.classList.contains('todo-item--checked');
    const todoText = todoItem.querySelector('.todo-item__description').textContent;
    updateTodoInLocalStorage(todoText, isChecked);
  }
});

function renderTodoItem(todo) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  if (todo.checked) {
    li.classList.add('todo-item--checked');
  }

  li.innerHTML = `
        <input type="checkbox" ${todo.checked ? 'checked' : ''}>
        <span class="todo-item__description">${todo.text}</span>
        <button class="todo-item__delete">Видалити</button>
    `;
  todoList.appendChild(li);
}

function saveTodoToLocalStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodoFromLocalStorage(text) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo.text !== text);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTodoInLocalStorage(text, isChecked) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoToUpdate = todos.find(todo => todo.text === text);
  if (todoToUpdate) {
    todoToUpdate.checked = isChecked;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}