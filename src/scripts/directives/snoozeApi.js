angular.module('snoozeAPI').directive('snoozeApi', [function() {
	return {
		restrict: 'AE',
		templateUrl: '<%= snoozetpl %>'
	};
}]);