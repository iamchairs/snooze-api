angular.module('snoozeAPI').controller('APIDocumentationCtrl', ['$scope', 'API', function($scope, API) {
	$scope.selectedRoute = API.getSelectedRoute();
	$scope.responseCodes = {
		100: 'Continue',
		101: 'Switching Protocols',
		200: 'OK',
		201: 'Created',
		202: 'Accepted',
		203: 'Non-Authoritative Information',
		204: 'No Content',
		205: 'Reset Content',
		206: 'Partial Content',
		300: 'Multiple Coices',
		301: 'Moved Permanently',
		302: 'Found',
		303: 'See Other',
		304: 'Not Modified',
		305: 'Use Proxy',
		307: 'Temporary Redirect',
		400: 'Bad Request',
		401: 'Unauthorized',
		402: 'Payment Required',
		403: 'Forbidden',
		404: 'Not Found',
		405: 'Method Not Allowed',
		406: 'Not Acceptable',
		407: 'Proxy Authentication Required',
		408: 'Request Timeout',
		409: 'Conflict',
		410: 'Gone',
		411: 'Length Required',
		412: 'Precondition Failed',
		413: 'Request Entity Too Large',
		414: 'Request-URI Too Long',
		415: 'Unsupported Media Type',
		416: 'Requested Range Not Satisfiable',
		417: 'Expectation Failed',
		500: 'Internal Server Error',
		501: 'Not Implemented',
		502: 'Bad Gateway',
		503: 'Service Unavailable',
		504: 'Gateway Timeout',
		506: 'HTTP Version Not Supported'
	};

	$scope.getDTO = function(data) {
		if(typeof data === 'object') {
			var DTO = [];
			for(var key in data) {
				var row = data[key];
				row.name = key;
				DTO.push(row);
			};

			return data;
		} else {
			var DTO = API.getDTO(data);
			return DTO.properties;
		}
	};

	$scope.toggleOpen = function(data) {
		if(data.opened === undefined) {
			data.opened = true;
		} else {
			data.opened = !data.opened;
		}
	};
}]);