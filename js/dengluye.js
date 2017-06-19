window.onload=function(){
//	var UserName=document.getElementById("userName");
//	//cookie  存放expires 设置过期时间的
////			document.cookie="usename=W1393282439;expires=Thu, 6 Dec 2017 12:00:00 GMT";
////			document.cookie="password=123456789"
//			console.log(cookie)
////			//获取cookie
//	userName.onblur=function(){
//		var userNameP=document.getElementById("userNameP");
//		if(userName.value==null || userName.value==""){
//			userNameP.innerHTML="请输入账号";
//		}else{
//			if(!/^[a-zA-Z0-9-\u4e00-\u9fa5]{5,16}$/.test(userName.value)){
//				userNameP.innerHTML="汉字字母数字组合，长度5-16位";
//			}else{
//				userNameP.innerHTML="正确";
//			}
//			
//		}
//	}
////	
////		var PassWord=document.getElementById("PassWord");
//	    passWord.onblur=function(){
//		var PassWordP=document.getElementById("PassWordP");
//		if(passWord.value==null || passWord.value==""){
//			passWordP.innerHTML="请输入密码";
//		}else{
//			if(!/^[a-zA-Z0-9!@#$^]{5,16}$/.test(PassWord.value)){
//				PassWordP.innerHTML="字母数字组合，长度5-16位";
//			}else{
//				PassWordP.innerHTML="正确";
//			}
//			
//		}

			var arr=document.cookie.split(";");
//			console.log(arr);
//		
			//alert(arr)；   //username=111;password=111;
			//console.log(typeof arr);
			//alert(arr);
			//alert(typeof arr);
			var arr1=arr[0].split("=");//username=111
			var arr2=arr[1].split("=");//passname=111
			//console.log(arr1);//Arry["username","111"]
			var userName=document.getElementById("username");
			var passWord=document.getElementById("password");
			var login=document.getElementById("login");
			//给登录的按钮添加事件 获取到的用户名和密码 要和cookie 存放的用户名和密码进行比较
			//如果一致，点击登录调到首页
			login.onclick=function(){
//				alert(userName.value==arr1[1] && passWord.value==arr2[1]);
				if(userName.value==arr1[1] && passWord.value==arr2[1]){
					
					document.location="index.html";//输出用户名和cookie里的用户名和密码一致，调到首页
				}else{
//					alert("您的用户名和密码输入错误");
					PassWordP.innerHTML="您的用户名和密码输入错误";
				}
			}

	}
			
	    	
//		<script>
//			
		
//					function fun{
//					alert("登录失败，请检查网络");
//			}
		
//			
//			
//			
//			
//			
//		
//		</script>
