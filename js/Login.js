var app = angular.module("myApp",[]);
			
			app.controller("oppoCtrl",function($scope,$http){
				$scope.jump=function(){
					console.log($scope.cc)
					console.log($scope.dd)
					var name=localStorage.name;
					var password1=localStorage.Password;
					console.log(name)
					console.log(password1)
					if(name==$scope.cc&&password1==$scope.dd){
						location.href="index.html"
						alert(登录成功)
					}
				}
				
				
			})