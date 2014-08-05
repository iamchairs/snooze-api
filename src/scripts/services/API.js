angular.module('snoozeAPI').factory('API', ['$q', '$http', function($q, $http) {

	_API = {};

	var _name = '';
	var _routes = {};
	var _dtos = [];
	var _selectedRoute = [];
	var _selectedDTO = {
		dto: null
	};

	var _loadAPI = function(mixed) {
		var deferred = $q.defer();

		if(typeof mixed === 'object') {
			for(var key in mixed) {
				_API[key] = angular.copy(mixed[key]);
			}

			_updateMeta();
			_updateRoutes();
			_updateDTOs();
			deferred.resolve();
		} else if(typeof mixed === 'string') {
			$http.get(mixed).success(function(Data) {
				return _loadAPI(Data);
			});
		}

		return deferred.promise;
	};

	var _getAPI = function() {
		return _API;
	};

	var _getRoutes = function() {
		return _routes;
	};

	var _getDTOs = function() {
		return _dtos;
	};

	var _getName = function() {
		return _name;
	};

	var _updateMeta = function() {
		_name = _API['module'];
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

	var _updateDTOs = function() {
		_dtos.splice(0);

		var _unsorted = [];

		_.each(_API.dtos, function(dto) {
			_unsorted.push(dto);
		});

		_unsorted = _.sortBy(_unsorted, function(_dto) {
			return _dto.name;
		});

		_.each(_unsorted, function(_dto) {
			_dtos.push(_dto);
		});
	};

	var _selectRoute = function(rt) {
		_selectedRoute.splice(0);
		var _routes = [];

		_.each(_API.routes, function(route) {
			var parts = route.path.split('/');
			var base = parts[1];
			if(base === rt) {
				_routes.push(route);
			}
		});

		_routes = _.sortBy(_routes, function(_route) {
			return _route.path;
		});

		_.each(_routes, function(_route) {
			_selectedRoute.push(_route);
		});
	};

	var _selectDTO = function(dto) {
		_selectedDTO.dto = null;
		_selectedRoute.splice(0);

		_.each(_API.dtos, function(d) {
			if(d.name === dto) {
				_selectedDTO.dto = d;
			}
		});
	};

	var _getSelectedRoute = function() {
		return _selectedRoute;
	};

	var _getSelecedDTO = function() {
		return _selectedDTO;
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
		getDTOs: _getDTOs,
		selectRoute: _selectRoute,
		selectDTO: _selectDTO,
		getSelectedRoute: _getSelectedRoute,
		getSelectedDTO: _getSelecedDTO,
		getDTO: _getDTO
	};
}]);