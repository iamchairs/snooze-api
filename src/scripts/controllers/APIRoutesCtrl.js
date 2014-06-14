angular.module('snoozeAPI').controller('APIRoutesCtrl', ['$scope', 'API', function($scope, API) {
	$scope.api = {};
	$scope.api.name = API.getName();
	$scope.routes = API.getRoutes();
	$scope.selectedRoute = '';

	$scope.selectRoute = function(rt) {
		$scope.selectedRoute = rt;
		API.selectRoute(rt);
	};
}]);