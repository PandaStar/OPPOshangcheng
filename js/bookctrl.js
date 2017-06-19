angular.module("bookCtrl",[])
	.controller("list",function($scope,$http){
		$scope.str = "title"
		$http.get("json/mybook.json")
			.success(function(res){
				$scope.books = res;
				console.log($scope.books)
			})
	})
	.controller("detail",function($scope,$http,$routeParams){
//		$routeParams:传递参数
//		$routeParams.id;
		$http.get("json/mybook.json")
			.success(function(res){
				for(var i=0;i<res.datas.length;i++){
					if(res.datas[i].id===$routeParams.id){
						$scope.thisbook = res.datas[i]
						return;
					}
				}
				console.log($scope.books)
			})
	})
