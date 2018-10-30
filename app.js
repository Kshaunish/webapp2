(function () {
	'use strict';
	
	angular.module('app1', [])
	
	.controller('NameExtractor', function ($scope){

		$scope.clickme = function() {
			$scope.boxClass = true;
		}

		$scope.unclickme = function() {
			$scope.boxClass = false;
		}
  		//$scope.boxClass = true;

		$scope.reset = function() {
			$scope.name="";
			$scope.totalValue = "";
			
			if($scope.boxClass == true){
				$scope.boxClass = false;
			} else {
				$scope.boxClass = true;
			}
			

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