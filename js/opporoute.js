angular.module("opporoute",["ngRoute"])
	.config(["$routeProvider",function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:"page/list.html",
				controller:"list"
			})
//			.when("/:id",{
//				templateUrl:"page/detail.html",
//				controller:"detail"
//			})
//			.when("/detail",{
//				templateUrl:"page/detail.html",
//				controller:"detail"
//			})
			.when("/newoppo",{
				templateUrl:"page/newoppo.html",
				controller:"newoppo"
			})
			.when("/order",{
				templateUrl:"page/order.html",
				controller:"order"
			})
			.when("/addAdvert",{
				templateUrl:"page/addAdvert.html",
				controller:"addAdvert"
			})
			.when("/Advert",{
				templateUrl:"page/Advert.html",
				controller:"Advert"
			})
			.when("/attribute",{
				templateUrl:"page/attribute.html",
//				controller:"attribute"
			})
			.when("/add",{
				templateUrl:"page/add.html",
//				controller:"add"
			})
			.when("/VIP",{
				templateUrl:"page/VIP.html",
				controller:"VIP"
			})
			.when("/person",{
				templateUrl:"page/person.html",
//				controller:"person"
			})
			.when("/advise",{
				templateUrl:"page/advise.html",
//				controller:"advise"
			})
			.when("/about",{
				templateUrl:"page/about.html",
				controller:"about"
			})
			.otherwise({
				redirectTo:"/"
			})
	}])
