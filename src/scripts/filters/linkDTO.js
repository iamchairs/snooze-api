angular.module('snoozeAPI').filter('linkDTO', function() {
	return function(input) {
		var regExp = new RegExp('(@)([^\\s\\]]+)', 'g');
		if(input) {
			var ret = '<span>' + input.replace(regExp, '<dto-link>$1$2</dto-link>') + '</span>';
			return ret;
		} else {
			return '';
		}
	};
});