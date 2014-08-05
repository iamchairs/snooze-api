angular.module('snoozeAPI').controller('APICtrl', ['$scope', 'API', function($scope, API) {
	$scope.api = {};
	$scope.api.name = API.getName();
	$scope.routes = API.getRoutes();
	$scope.dtos = API.getDTOs();
	$scope.selectedRoute = '';
	$scope.selectedDTO = '';

	$scope.selectRoute = function(rt) {
		$scope.selectedRoute = rt;
		$scope.selectedDTO = '';
		API.selectRoute(rt);
	};

	$scope.selectDTO = function(dto) {
		$scope.selectedRoute = '';
		$scope.selectedDTO = dto;
		API.selectDTO(dto);
	};
}]);