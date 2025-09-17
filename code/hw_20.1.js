$(document).ready(function() {
  const $form = $('.js--form');
  const $todoInput = $('.js--form__input');
  const $todoList = $('.js--todos-wrapper');
  const $modalText = $('#modal-todo-text');
  const todoModal = new bootstrap.Modal(document.getElementById('todoModal'));

  loadTodosFromLocalStorage();

  $form.on('submit', function(event) {
    event.preventDefault();
    const todoText = $todoInput.val().trim();

    if (todoText) {
      const todo = {
        text: todoText,
        checked: false
      };
      renderTodoItem(todo);
      saveTodoToLocalStorage(todo);
      $todoInput.val('');
    }
  });

  $todoList.on('click', '.todo-item__delete', function() {
    const $todoItem = $(this).closest('.list-group-item');
    const todoText = $todoItem.find('.todo-item__description').text();
    removeTodoFromLocalStorage(todoText);
    $todoItem.remove();
  });

  $todoList.on('click', '.todo-item__description', function() {
    const todoText = $(this).text();
    $modalText.text(todoText);
    todoModal.show();
  });

  $todoList.on('click', '.todo-item__checkbox', function() {
    const $todoItem = $(this).closest('.list-group-item');
    const isChecked = $(this).is(':checked');
    const todoText = $todoItem.find('.todo-item__description').text();

    if (isChecked) {
      $todoItem.addClass('todo-item--checked');
    } else {
      $todoItem.removeClass('todo-item--checked');
    }
    updateTodoInLocalStorage(todoText, isChecked);
  });

  function renderTodoItem(todo) {
    const listItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center todo-item ${todo.checked ? 'todo-item--checked' : ''}">
                <input type="checkbox" class="form-check-input me-2 todo-item__checkbox" ${todo.checked ? 'checked' : ''}>
                <span class="todo-item__description flex-grow-1" style="cursor: pointer;">${todo.text}</span>
                <button type="button" class="btn btn-danger btn-sm todo-item__delete">Видалити</button>
            </li>
        `;
    $todoList.append(listItem);
  }

  function loadTodosFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => renderTodoItem(todo));
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
});


