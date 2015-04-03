angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	})

	.when('/races', {
	    templateUrl: 'views/race.html',
	    controller: 'RaceController'
	});

    $locationProvider.html5Mode(true);
}]);
