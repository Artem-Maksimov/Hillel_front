$(document).ready(function() {
  const API_URL = 'http://localhost:3000/api/todos';

  const $form = $('.js--form');
  const $todoInput = $('.js--form__input');
  const $todoList = $('.js--todos-wrapper');
  const $modalText = $('#modal-todo-text');
  const todoModal = new bootstrap.Modal(document.getElementById('todoModal'));

  function loadTodos() {
    $.get(API_URL)
      .done(function(todos) {
        $todoList.empty();
        todos.forEach(todo => renderTodoItem(todo));
      })
      .fail(function(err) {
        console.error("Помилка завантаження завдань:", err);
      });
  }

  $form.on('submit', function(event) {
    event.preventDefault();
    const todoText = $todoInput.val().trim();

    if (todoText) {
      $.post(API_URL, { text: todoText, checked: false })
        .done(function(newTodo) {
          renderTodoItem(newTodo);
          $todoInput.val('');
        })
        .fail(function(err) {
          console.error("Помилка додавання завдання:", err);
        });
    }
  });

  $todoList.on('click', '.todo-item__delete', function() {
    const $todoItem = $(this).closest('.list-group-item');
    const todoId = $todoItem.data('id');

    $.ajax({
      url: `${API_URL}/${todoId}`,
      type: 'DELETE'
    })
      .done(function() {
        $todoItem.remove();
      })
      .fail(function(err) {
        console.error("Помилка видалення завдання:", err);
      });
  });

  $todoList.on('click', '.todo-item__checkbox', function() {
    const $todoItem = $(this).closest('.list-group-item');
    const todoId = $todoItem.data('id');
    const isChecked = $(this).is(':checked');

    $.ajax({
      url: `${API_URL}/${todoId}`,
      type: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ checked: isChecked })
    })
      .done(function(updatedTodo) {
        if (updatedTodo.checked) {
          $todoItem.addClass('todo-item--checked');
        } else {
          $todoItem.removeClass('todo-item--checked');
        }
      })
      .fail(function(err) {
        console.error("Помилка оновлення завдання:", err);
      });
  });

  $todoList.on('click', '.todo-item__description', function() {
    const todoText = $(this).text();
    $modalText.text(todoText);
    todoModal.show();
  });

  function renderTodoItem(todo) {
    const listItem = `
      <li class="list-group-item d-flex justify-content-between align-items-center todo-item ${todo.checked ? 'todo-item--checked' : ''}" data-id="${todo._id}">
          <input type="checkbox" class="form-check-input me-2 todo-item__checkbox" ${todo.checked ? 'checked' : ''}>
          <span class="todo-item__description flex-grow-1" style="cursor: pointer;">${todo.text}</span>
          <button type="button" class="btn btn-danger btn-sm todo-item__delete">Видалити</button>
      </li>
    `;
    $todoList.append(listItem);
  }

  loadTodos();
});