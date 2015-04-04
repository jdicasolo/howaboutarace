angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	})

	.when('/races', {
	    templateUrl: 'views/race.html',
	    controller: 'RaceController'
	})
	.when('/contact', {
	    templateUrl: 'views/contact.html',
	    controller: 'MainController'
	});

    $locationProvider.html5Mode(true);
}]);
