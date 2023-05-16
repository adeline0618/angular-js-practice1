angular.module('Todo').directive('todoTitle', function () {
  return {
    template: '<h1>Angular.js Todo List</h1>',
  };
});
angular.module('Todo').directive('todoItem', function () {
  return {
    templateUrl: './template/todoItem.tpl.html',
  };
});
angular.module('Todo').directive('todoFilters', function () {
  return {
    templateUrl: './template/todoFilters.tpl.html',
  };
});
angular.module('Todo').directive('todoForm', function () {
  return {
    templateUrl: './template/todoForm.tpl.html',
  };
});
