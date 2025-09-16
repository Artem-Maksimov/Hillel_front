const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Будь ласка, введіть завдання!');
    return;
  }

  const listItem = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Видалити';
  deleteBtn.className = 'delete-btn';

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const listItemToRemove = event.target.closest('li');
    if (listItemToRemove) {
      listItemToRemove.remove();
    }
  }
});