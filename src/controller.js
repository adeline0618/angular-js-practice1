angular.module('Todo').controller('TodoCtrl', function ($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.remove = function (todo) {
    todoStorage.remove(todo);
    $scope.todos = todoStorage.get();
  };

  $scope.add = function (newTodoTitle) {
    $scope.newTodoTitle = '';
    todoStorage.add(newTodoTitle);
  };

  $scope.update = function () {
    todoStorage.update();
  };
});
