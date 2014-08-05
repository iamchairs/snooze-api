angular.module('snoozeAPI').directive('dtoLink', function() {
	return {
		restrict: 'E',
		link: function(scope, ele) {
			var text = ele.html();
			var _dto = text.substr(1);

			for(var i = 0; i < scope.dtos.length; i++) {
				var dto = scope.dtos[i];
				if(_dto === dto.name) {
					ele.attr('ng-click', 'selectDTO(' + _dto + ')');
					break;
				}
			}
		}
	};
});