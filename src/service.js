angular.module('Todo').factory('todoStorage', [
  '$http',
  function ($http) {
    const storage = {
      todos: [],

      get: async function () {
        try {
          const response = await $http.get('http://localhost:8080/api/todo/');
          const data = response.data;
          storage.todos = [...data];
          return storage.todos;
        } catch (error) {
          console.error('Error occurred while retrieving todos:', error);
          throw error;
        }
      },

      remove: async function (todo) {
        try {
          await $http.delete(`http://localhost:8080/api/todo/${todo.id}`);
          storage.todos = storage.todos.filter(el => el.id !== todo.id);
        } catch (error) {
          console.error('Error occurred while removing todo:', error);
          throw error;
        }
      },

      add: async function (newtodo) {
        try {
          const response = await $http.post('http://localhost:8080/api/todo/', {
            description: newtodo,
            completed: false,
          });
          const createdTodo = response.data;
          storage.todos.unshift(createdTodo);
        } catch (error) {
          console.error('Error occurred while adding todoß', error);
          throw error;
        }
      },

      update: async function (todo) {
        if (!todo) {
          console.error('Todo object is undefined.');
          return;
        }
        console.log(todo);
        try {
          const response = await $http.put(
            `http://localhost:8080/api/todo/${todo.id}`,
            { description: todo.description, completed: todo.completed }
          );
          const updatedTodo = response.data;
          const index = storage.todos.findIndex(el => el.id === updatedTodo.id);
          if (index !== -1) {
            storage.todos[index] = updatedTodo;
          }
        } catch (error) {
          console.error('Error occurred while updating todo:', error);
          throw error;
        }
      },
    };

    return storage;
  },
]);
