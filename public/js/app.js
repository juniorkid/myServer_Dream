angular.module("myApp", [])
.controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'Ragnarok', price: 200},
		{title: 'Maple', price: 300},
		{title: 'Yulgang', price: 400}
	];
})