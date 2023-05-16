angular.module('Todo').controller('TodoCtrl', function ($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.remove = function (todo) {
    alert('삭제된 내용은 되돌릴 수 없습니다.');
    $scope.todos = $scope.todos.filter(el => el.title !== todo.title);
  };

  $scope.add = function (newTodoTitle) {
    if ($scope.todos.filter(el => el.title === newTodoTitle).length) {
      alert('이미 존재하는 항목입니다.');
      $scope.newTodoTitle = '';
      return;
    }
    $scope.todos.unshift({
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now(),
    });
    $scope.newTodoTitle = '';
  };
});
