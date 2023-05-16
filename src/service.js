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
    remove: () => {},
    add: () => {},
  };
  return storage;
});
