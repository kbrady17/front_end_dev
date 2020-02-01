
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
			var items = lunchString.split(',');
			var real_items = items.filter(el => el.trim() != "");
			var numItems = real_items.length;
			
			console.log(numItems)
			if (numItems == 0) return "Please enter data first";
			if (numItems > 3) return "Too Much!";
			
			return "Enjoy!"
	
		}

	});

})();

