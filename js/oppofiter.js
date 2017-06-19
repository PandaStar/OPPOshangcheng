angular.module("filterApp",[])
	.filter("statusText",function(){
		return function(str){
			return str == "true"?"正常出售":"暂无库存";
		}
	})
	.filter("statusColor",function(){
		return function(str){
			return str == "true"?"text-success":"text-danger";
		}
	})
