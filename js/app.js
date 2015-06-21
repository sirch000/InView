"use strict";

angular.module('inView', [])
  .controller('inViewController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.flooring = data.flooring;
		console.log($scope.flooring);
  	});
  }]);
