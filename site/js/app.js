var app = angular.module('todo', []);

app.directive('ngBlur', function(){
	return function(scope, elem, attrs){
		elem.bind('blur', function(){
			scope.$apply(attrs.ngBlur);
		})
	}
})

app.controller('TodoCtrl', function($scope, filterFilter, $http, $location){
	$scope.todos = [
		{"name": "Fabrication des pots d'échappement: Ajouter un petit morceau de fer durant le soudage nous permettrait de s'abstenir de l'opération de pliage...", "completed":false},
		{"name": "Cablage lecteur cd: Passer les fils de connexion directement par le carter nous permettrait d'économiser 1,5 mètre de cablage...", "completed":false}
	];

	$scope.$watch('todos', function(){
		$scope.remaining = filterFilter($scope.todos, {completed:false}).length;
		$scope.allchecked = !$scope.remaining;
	}, true)

	$scope.openCategory = function($event, name) {
                $window.alert("Called " + name);
            }	
	
	if($location.path() == ''){ $location.path('/')}
	$scope.location = $location;
	$scope.$watch('location.path()', function(path){
		$scope.statusFilter =
			(path == '/active') ? {completed : false} :
			(path == '/done') ? {completed : true} :
			null;
	});


	$scope.removeTodo = function(index){
		$scope.todos.splice(index,1);
	}

	$scope.addTodo = function(){
		$scope.todos.push({
			name : $scope.newtodo,
			completed : false
		});
		$scope.newtodo = '';
		return false;
	}

	$scope.editTodo = function(todo){
		todo.editing = false;
	}

	$scope.checkAllTodo = function(allchecked){
		$scope.todos.forEach(function(todo){
			todo.completed = allchecked;
		})
	}
});