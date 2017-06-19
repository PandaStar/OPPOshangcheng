var app = angular.module("myApp",[]);
			
			app.controller("oppoCtrl",function($scope,$http){
				$scope.jump=function(e){
					//e.preventDefault()
					console.log($scope.name)
					var reg1=/1[3578][0-9]{9}/;
					var reg2=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
					if(reg1.test($scope.name) && reg2.test($scope.mima)){
//				
						localStorage.name=$scope.name;
						localStorage.Password=$scope.mima;
						location.href="OPP.html"
						alert(注册成功)
					}
					
					
				}
			})