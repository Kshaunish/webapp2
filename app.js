(function () {
	'use strict';
	
	angular.module('app1', [])
	
	.controller('NameExtractor', function ($scope){


		$scope.reset = function() {
			$scope.name="";
			$scope.totalValue = "";
		};
				
		$scope.displayNumeric = function() {
			var totalNameValue = calcNameValue($scope.name);
			if(totalNameValue == 0){
				$scope.totalValue = "";
			} else {
				$scope.totalValue = "ASCII Value Sum is : " + totalNameValue;
			}
		};

		function calcNameValue(string){
			var totalStringValue = 0;
			for(var i=0;i<string.length;i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		};
	});

})();