//var app = angular.module("myApp",[]);
//			
//			app.controller("oppoCtrl",function($scope,$http){
//				
//			})
			


	

angular.module("oppoCtrl",[])
	.controller("list",function($scope,$http){
		$scope.str = "title"
		$http.get("json/oppo.json")
			.success(function(res){
				$scope.oppos = res;
				$scope.flag=false;
				console.log($scope.oppos)
			})
				$scope.x = 5;
				$scope.y = 0;
				$scope.changePage = function(i){
					$scope.y = $scope.x*i
					
				}
//				$scope.getA = function(n){
//						var n = Math.ceil(n)
//						return new Array(n);
//					}
			
	})
	
	.controller("detail",function($scope,$http,$routeParams){
//		$routeParams:传递参数
//		$routeParams.id;
		$http.get("json/oppo.json")
			.success(function(res){
				for(var i=0;i<res.datas.length;i++){
					if(res.datas[i].id===$routeParams.id){
						$scope.thisoppo = res.datas[i]
						return;
					}
				}
				console.log($scope.oppos)
			})
	})
	.controller('newoppo', function ($scope) {
			var vm = $scope.vm = {};
			})	
	
	
	.controller("about",function($scope,$http){
				$http({
					method:"GET",
					url:"json/person.json"
				})	
				
				.success(function(res){
					$scope.data=res;
					
				})
				.error(function(err){
					console.log(err);
				})
				$scope.flag=false;
				$scope.oppo="Id";   //排序方式		字符串类型
				$scope.hideFun=function($event,oppoTitle){
					
					console.log(angular.element($event.target))
				//	js元素转化为jqLite元素, angular.element()
					var a=confirm("确定要删除【"+oppoTitle+"】联系人的信息嘛？");
					if(a){
						angular.element($event.target).parent().parent().remove();	
					}
					
				}
			})
	
	
	
	
	.controller("VIP",function($scope,$http){
				$http({
					method:"GET",
					url:"json/vip.json"
				})	
				
				.success(function(res){
					$scope.data=res;
					$scope.getArr = function(m){
						var m = Math.ceil(m)
						return new Array(m);
					}
				})
				.error(function(err){
					console.log(err);
				})
				$scope.flag=false;
				$scope.oppo="Id";   //排序方式		字符串类型
				
				$scope.hideFun=function($event,oppoTitle){
					
					console.log(angular.element($event.target))
				//	js元素转化为jqLite元素, angular.element()
					var a=confirm("确定要删除【"+oppoTitle+"】联系人的信息嘛？");
					if(a){
						angular.element($event.target).parent().parent().remove();	
					}
					
				}
				$scope.x = 2;
				$scope.y = 0;
				$scope.changePage = function(i){
					$scope.y = $scope.x*i
				}
			})
	
	
	
	
	.controller("Advert",function($scope,$http){
				$http({
					method:"GET",
					url:"json/advent.json"
				})	
				
				.success(function(res){
					$scope.data=res;
					
				})
				.error(function(err){
					console.log(err);
				})
				$scope.flag=false;
				$scope.oppo="Id";   //排序方式		字符串类型
				$scope.hideFun=function($event,oppoTitle){
					
					console.log(angular.element($event.target))
				//	js元素转化为jqLite元素, angular.element()
					var a=confirm("确定要删除【"+oppoTitle+"】联系人的信息嘛？");
					if(a){
						angular.element($event.target).parent().parent().remove();	
					}
					
				}
				$scope.reverse = function($event){
					var inp = angular.element($event.target).parent().find("table").find("input");
					for(var i=0;i<inp.length;i++){
						inp[i].checked = !inp[i].checked
					}
				}
			})	
			
		
		.controller('newoppo', function ($scope, CityData) {
			
		//$scope.vm = CityData;
			  var vm = $scope.vm = {
			  	country:CityData
			  }
		//每次点击,都要把新的对象添加到vm中  作为新的属性
		  
		  // 更换省的时候清空市
			$scope.$watch('vm.countries', function() {
			    vm.pro = null;
			})
			//// 更换市的时候清空地区
			$scope.$watch('vm.pro', function() {
			  vm.city = null;
			})
		})	

  					
  					
  					
  					
  					
  					
  					
  					
		
	
			
	.controller('addAdvert', function ($scope) {

				  
//				var width = 0;
//				$(function(){
//					$('.dropdown-toggle').dropdown();
//					
//				})
//				$scope.gli=function($event){
//	//				alert(1234)
//					var div = $event.target;
//					console.log($event);
//					$(function(){
//						$($event.target).prev().children(0).animate({width:"100%"},200)
//						
//					})
//					
//					
//////					
//////					
//					var timer = setInterval(function(){
//						if(width>100){clearInterval(timer);return};
//						$scope.process.css("width",width++ +"%");
//						$("#process").html(width+"%");
//					},100)
//				} 
//					
		
			})
				  
				  
				  
				  
				  
				  
				  
				  
				
	
			
	


			.controller("order", function($scope) {
			$scope.Product = [{
				id: 1000,
				name: "OPPO R9s",
				quantity: 1,
				price: 2799
			}, {
				id: 1001,
				name: "OPPO R9Plus",
				quantity: 1,
				price: 3499
			}, {
				id: 1002,
				name: "OPPO R7",
				quantity: 1,
				price: 2700
			}, {
				id: 1003,
				name: "OPPO R7P+",
				quantity: 1,
				price: 3200
			}];
			//减少数量
			$scope.reduce = function(index) {
				if($scope.Product[index].quantity > 1) {
					$scope.Product[index].quantity--;
				} else {
					$scope.remove(index);
				}
			}
			//添加数量函数
			$scope.add = function(index) {
				$scope.Product[index].quantity++;
			}
			//所有商品总价函数
			$scope.totalQuantity = function() {
				var allprice = 0
				for(var i = 0; i < $scope.Product.length; i++) {
					allprice += $scope.Product[i].quantity * $scope.Product[i].price;
				}
				return allprice;
			}
			//购买总数量函数
			$scope.numAll = function() {
				var numAlls = 0
				for(var i = 0; i < $scope.Product.length; i++) {
					numAlls += $scope.Product[i].quantity;
				}
				return numAlls;
			}
			//删除当前商品
			$scope.remove = function(index) {
				if(confirm("确定要清空数据吗")) {
					$scope.Product.splice(index, 1)
				}
			}
			//清空购物车
			$scope.removeAll = function() {
				if(confirm("你确定套清空购物车所有商品吗?")) {
					$scope.Product = [];
				}
			}
			//解决输入框输入负数时变为1
			$scope.change = function(index) {
				if($scope.Product[index].quantity >= 1) {} else {
					$scope.Product[index].quantity = 1;
				}
			}
			$scope.$watch('Product', function(oldvalue, newvalue) {
				console.log(oldvalue);
				console.log(newvalue);
			})
				
			
			
			
			
		})



				