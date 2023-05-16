(function () {
  const app = angular.module('Todo', []);

  app.controller('TodoCtrl', [
    '$scope',
    function ($scope) {
      $scope.todos = [
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
      ];

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
    },
  ]);
})();
