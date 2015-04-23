angular.module('RaceCtrl', ['ui.grid'])
	.controller('RaceController', function($scope, $http, Races) {

	$scope.gridOptions = {
		enableFiltering: true,
		columnDefs: [
			{field: 'name'},
			{field: 'sport'},
			{field: 'location'},
			{field: 'date'}
		]
	}

	Races.get()
		.success(function(data){
			$scope.gridOptions.data = data;
		});
});
