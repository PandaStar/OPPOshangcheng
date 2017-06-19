angular.module("myApp").controller("oppoCtrll",function($scope,$http){
				$http({
					method:"GET",
					url:"json/vip.json"
				})	
				
				.success(function(res){
					$scope.data=res;
					
				})
				.error(function(err){
					console.log(err);
				})
				$scope.flag=true;
				$scope.oppo="Id";   //排序方式		字符串类型
				$scope.hideFun=function($event,oppoTitle){
					
					console.log(angular.element($event.target))
				//	js元素转化为jqLite元素, angular.element()
					var a=confirm("确定要删除【"+oppoTitle+"】管理员的资料嘛？");
					if(a){
						angular.element($event.target).parent().parent().remove();	
					}
					
				}
			})