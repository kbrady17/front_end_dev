
( function () { 
'use strict';


angular.module('LunchCheck', [])
	.controller('LunchCheckController', function ($scope, $injector) {
		$scope.lunchitems = "";
	
		$scope.checkItems = function() {
			var returnString = countItems($scope.lunchitems);
			$scope.checkitemsstring = returnString;
		}


		function countItems(lunchString) {
			var numItems = lunchString.split(',').length;
			console.log(lunchString.split(','))
			if (numItems === 1 && lunchString === "") return "Please enter data first";
			if (numItems > 3) return "Too Much!";
			
			return "Enjoy!"
	
		}

	});

})();

