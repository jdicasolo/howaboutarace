angular.module('RaceCtrl', ['ui.grid']).controller('RaceController', function($scope) {

	$scope.gridOptions = {
		enableFiltering: true,
		columnDefs: [
			{field: 'name'},
			{field: 'sport'},
			{field: 'location'},
			{field: 'date'}
		]
	}

    $scope.gridOptions.data = [
	{"name": "red moshannon", "sport": "wildwater", "location": "moshannon, pa", "date": "3/28/2015"},
	{"name": "elk river", "sport": "wildwater", "location": "elk, wv", "date": "4/28/2015"},
	{"name": "some bike race", "sport": "mountain bike", "location": "somewhere, pa", "date": "4/28/2015"},
	{"name": "bump jump and slide", "sport": "skiing", "location": "seven springs, pa", "date": "3/12/2015"}
    ];

});
