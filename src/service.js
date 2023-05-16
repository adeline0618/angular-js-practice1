angular.module('Todo').factory('todoStorage', () => {
  const storage = {
    todos: [
      {
        title: 'AngulerJS 익히기',
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: '책보기',
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: '요리하기',
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: '청소하기',
        completed: true,
        createdAt: Date.now(),
      },
    ],
    get: () => {
      return storage.todos;
    },
    remove: todo => {
      storage.todos = storage.todos.filter(el => el.title !== todo.title);
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
    },
  };
  return storage;
});
