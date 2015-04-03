angular.module('RaceService', []).factory('Race', ['$http', function($http) {
    return {
	get : function() {
	    return $http.get('api/races');
	},

	//these will work when more api routes are defined
	//on the node side of things
	// call to post and create a new race
	create : function(raceData) {
	    return $http.post('/api/races', raceData);
	},

	// call to delete a race
	delete : function(id) {
	    return $http.delete('/api/races/' + id);
	}
    }
}]);
