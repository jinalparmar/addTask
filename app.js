angular.module("addTasker",[])
.controller("secondCtrl",['$scope', '$http', function($scope, $http) {

	$scope.task = [];	
	
	$http.get("data.json").success(function(data,status,headers,config) {
		     $scope.task = data;
		     
			}).error(function(data,status,headers,config) {
	   		alert("Sorry Due to technical difficulties page can't load,So try again later!");
		});
	$scope.addTask = function(add) {
		var addNewTask = {
			        name:add.name,
				    date:add.date,
				    assigned:add.assigned
			};
		$scope.task.push(addNewTask);
		//alert($scope.task.length);
		addNewTask = {};
		//console.log($scope.task);
	};
	

	$scope.removeTask=[];
	$scope.remove = function(index) {
			//console.log(index);
			//console.log($scope.task[0]);
			var data = $scope.task.splice(index,1);
			//console.log(data);
			$scope.removeTask.push(data[index]);
			//console.log($scope.removeTask);
		
	};
}]);

