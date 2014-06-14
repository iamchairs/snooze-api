angular.module('snoozeAPI').factory('API', ['$q', '$http', function($q, $http) {

	_API = {};

	var _name = 'snooze API';
	var _routes = {};
	var _selectedRoute = {};

	_loadAPI = function(mixed) {
		var deferred = $q.defer();

		if(typeof mixed === 'object') {
			for(var key in mixed) {
				_API[key] = angular.copy(mixed[key]);
			}

			_updateRoutes();
			deferred.resolve();
		} else if(typeof mixed === 'string') {
			$http.get(mixed).success(function(Data) {
				return _loadAPI(Data);
			});
		}

		return deferred.promise;
	};

	_getAPI = function() {
		return _API;
	};

	_getRoutes = function() {
		return _routes;
	};

	var _getName = function() {
		return _name;
	};

	var _updateRoutes = function() {
		for(var key in _routes) {
			delete _routes[key];
		}

		_.each(_API.routes, function(route) {
			var parts = route.path.split('/');
			var base = parts[1];
			if(_routes[base] === undefined) {
				_routes[base] = {
					'routes': []
				}
			}

			_routes[base].routes.push(route);
		});
	};

	var _selectRoute = function(rt) {
		for(var key in _selectedRoute) {
			delete _selectedRoute[key];
		}

		_.each(_API.routes, function(route) {
			var parts = route.path.split('/');
			var base = parts[1];
			if(base === rt) {
				_selectedRoute[route.path] = route;
			}
		});
	};

	var _getSelectedRoute = function() {
		return _selectedRoute;
	};

	var _getDTO = function(nm) {
		return _.find(_API.dtos, function(DTO) {
			return DTO.name === nm;
		});

		return null;
	};

	return {
		loadAPI: _loadAPI,
		getAPI: _getAPI,
		getName: _getName,
		getRoutes: _getRoutes,
		selectRoute: _selectRoute,
		getSelectedRoute: _getSelectedRoute,
		getDTO: _getDTO
	};
}]);