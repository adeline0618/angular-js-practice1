angular.module('todo').directive('todoTitle', function () {
  return {
    template: '<h1>Angular.js Todo List</h1>',
  };
});
angular.module('todo').directive('todoItem', function () {
  return {
    templateUrl: './template/todoItem.tpl.html',
  };
});
