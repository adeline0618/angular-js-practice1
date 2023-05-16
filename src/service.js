angular.module('Todo').factory('todoStorage', () => {
  const TODO_DATA = 'TODO_DATA';
  const storage = {
    todos: [],

    _saveToLocalStorage: data => {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    _getFromLocalStorage: () => {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },

    get: () => {
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    remove: todo => {
      storage.todos = storage.todos.filter(el => el.title !== todo.title);
      storage._saveToLocalStorage(storage.todos);
    },
    add: newTodoTitle => {
      if (storage.todos.filter(el => el.title === newTodoTitle).length) {
        alert('이미 존재하는 항목입니다.');
        return;
      }
      storage.todos.unshift({
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      });
      storage._saveToLocalStorage(storage.todos);
    },
  };
  return storage;
});
