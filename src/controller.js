angular.module('Todo', []).controller('TodoCtrl', [
  '$scope',
  'todoStorage',
  function ($scope, todoStorage) {
    $scope.todos = [];

    todoStorage.get().then(function (todos) {
      $scope.$apply(function () {
        $scope.todos = todos;
      });
    });

    $scope.remove = function (todo) {
      todoStorage.remove(todo).then(function () {
        todoStorage.get().then(function (todos) {
          $scope.$apply(function () {
            $scope.todos = todos;
          });
        });
      });
    };

    $scope.add = function (todo) {
      $scope.newTodoTitle = '';
      todoStorage.add(todo).then(function () {
        todoStorage.get().then(function (todos) {
          $scope.$apply(function () {
            $scope.todos = todos;
          });
        });
      });
    };

    $scope.update = function (todo) {
      todoStorage.update(todo).then(function () {
        todoStorage.get().then(function (todos) {
          $scope.$apply(function () {
            $scope.todos = todos;
          });
        });
      });
    };
  },
]);
