angular.module('snoozeAPI').factory('API', ['$q', '$http', function($q, $http) {

	_API = {
	  "module": "flint",
	  "modules": [],
	  "routes": [
	    {
	      "method": "get",
	      "path": "/contacts",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/contacts/requests",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "post",
	      "path": "/contacts/requests/new",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "put",
	      "path": "/contacts/requests/approve",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "put",
	      "path": "/contacts/requests/decline",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/experiences/list/:username",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/experiences/details/:id",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "post",
	      "path": "/experiences/new",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "put",
	      "path": "/experiences/update/:id",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "delete",
	      "path": "/experiences/delete/:id",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "put",
	      "path": "/geo/ping",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/geo/search",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/skills/:username",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "post",
	      "path": "/skills/new",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "delete",
	      "path": "/skills/delete/:name",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "get",
	      "path": "/users/details/:username",
	      "response": {
	        "200": {},
	        "404": {},
	        "500": {}
	      },
	      "request": {
	        "params": {
	          "username": {
	            "type": "string",
	            "description": "Username of user.",
	            "example": "iamchairs"
	          }
	        }
	      }
	    },
	    {
	      "method": "post",
	      "path": "/users/new",
	      "response": {
	        "201": 'UserDTO',
	        "400": 'MessageDTO',
	        "409": 'MessageDTO',
	        "500": 'MessageDTO'
	      },
	      "request": {
	        "body": {
	          "username": {
	            "type": "string",
	            "description": "Username of user.",
	            "example": "iamchairs",
	            "required": true
	          },
	          "email": {
	            "type": "string",
	            "description": "Email of user.",
	            "example": "example@gmail.com",
	            "required": true
	          },
	          "password": {
	            "type": "string",
	            "description": "Password of user.",
	            "example": "password",
	            "required": true
	          }
	        }
	      }
	    },
	    {
	      "method": "put",
	      "path": "/users/save",
	      "response": {
	        "204": {},
	        "400": {},
	        "500": {}
	      },
	      "request": {
	        "body": "UserDTO"
	      }
	    },
	    {
	      "method": "get",
	      "path": "/users/search",
	      "response": null,
	      "request": {
	      	"query": {
	      		"username": {
		          "type": "string",
		          "description": "Search for like usernames",
		          "example": "iamchairs"
		        },
		        "email": {
		          "type": "string",
		          "description": "Search for like emails",
		          "example": "example@gmail.com"
		        }
	      	}
	      }
	    },
	    {
	      "method": "resource",
	      "path": "/assets/userimages/**/*",
	      "response": null,
	      "request": null
	    },
	    {
	      "method": "resource",
	      "path": "/assets/userimages/*",
	      "response": null,
	      "request": null
	    }
	  ],
	  "services": [],
	  "controllers": [],
	  "validators": [],
	  "dtos": [
	    {
	      "name": "ContactDTO",
	      "properties": [
	        {
	          "name": "id",
	          "type": "int",
	          "description": "id of contact row",
	          "example": "1",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "user",
	          "type": "@UserDTO",
	          "description": "UserDTO Object",
	          "example": "@UserDTO",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "ExperienceDTO",
	      "properties": [
	        {
	          "name": "id",
	          "type": "int",
	          "description": "id of experience",
	          "example": 1,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "title",
	          "type": "string",
	          "description": "title of experience",
	          "example": "Logo Work For Apple",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "company",
	          "type": "string",
	          "description": "name of company worked for",
	          "example": "Apple",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "start",
	          "type": "int",
	          "description": "UTC Timestamp of start date",
	          "example": null,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "end",
	          "type": "int",
	          "description": "UTC Timestamp of end date",
	          "example": 1,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "description",
	          "type": "string",
	          "description": "description of experience",
	          "example": "When through 87 revisions.",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "ExperienceCollectionDTO",
	      "properties": [
	        {
	          "name": "experiences",
	          "type": "array",
	          "description": "array of @ExperienceDTO",
	          "example": "[@ExperienceDTO]",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "GeoDTO",
	      "properties": [
	        {
	          "name": "lat",
	          "type": "number",
	          "description": "latitude of geolocation",
	          "example": 30.12345,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "lng",
	          "type": "number",
	          "description": "longitude of geolocation",
	          "example": 30.12345,
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "GeoSearchDTO",
	      "properties": [
	        {
	          "name": "users",
	          "type": "array",
	          "description": "array of users returned from a geo search",
	          "example": "[@UserDTO]",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "MessageDTO",
	      "properties": [
	        {
	          "name": "message",
	          "type": "string",
	          "description": "Message text.",
	          "example": "User is not logged in.",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "SkillDTO",
	      "properties": [
	        {
	          "name": "id",
	          "type": "int",
	          "description": "id of the skill",
	          "example": 1,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "name",
	          "type": "string",
	          "description": "name of the skill",
	          "example": "PHP",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "TestDTO",
	      "properties": [
	        {
	          "name": "message",
	          "type": "string",
	          "description": "A message from the client.",
	          "example": "Hello World!",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "UserDTO",
	      "properties": [
	        {
	          "name": "id",
	          "type": "int",
	          "description": "id of user",
	          "example": "1",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "firstName",
	          "type": "string",
	          "description": "first name of user",
	          "example": "John",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "lastName",
	          "type": "string",
	          "description": "last name of user",
	          "example": "Doe",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "username",
	          "type": "string",
	          "description": "username of the user",
	          "example": "iamchairs",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "email",
	          "type": "string",
	          "description": "email of the user",
	          "example": "example@gmail.com",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "profession",
	          "type": "string",
	          "description": "profession of the user",
	          "example": "Software Engineer",
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "image",
	          "type": "string",
	          "description": "image url",
	          "example": "http://mysite.com/assets/images/default.jpg",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    },
	    {
	      "name": "UserSkillDTO",
	      "properties": [
	        {
	          "name": "id",
	          "type": "int",
	          "description": "id of user skill",
	          "example": 1,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "skillId",
	          "type": "int",
	          "description": "id of the the skill",
	          "example": 1,
	          "default": null,
	          "required": false
	        },
	        {
	          "name": "skill",
	          "type": "string",
	          "description": "name of the skill",
	          "example": "PHP",
	          "default": null,
	          "required": false
	        }
	      ],
	      "strict": false
	    }
	  ]
	};

	var _name = 'snooze API';
	var _routes = {};
	var _selectedRoute = {};

	_loadAPI = function(mixed) {
		var deferred = $q.defer();

		if(typeof mixed === 'object') {
			for(var key in mixed) {
				_API[key] = angular.copy(mixed[key]);
			}

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

	_updateRoutes();

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