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
	})
	.when('/signup', {
		templateUrl: 'views/signup.html',
		controller: 'MainController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'MainController'
	})
	.when('/account', {
		templateUrl: 'views/account.html',
		controller: 'AccountController'
	});

    $locationProvider.html5Mode(true);
}]);
