window.onload=function(){
//	var Phone=document.getElementById("phone");
//	var register=document.getElementById("register");
//	//cookie 存放  expires设置的过期时间
//			
//	Phone.onblur=phone1;
//	
//	function phone1(){
//		var Reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9])\d{8}$/;
//		var Phonep=document.getElementById("phonep");
//		if(Phone.value==null ||Phone.value==""){
//			Phonep.innerHTML="请输入手机号";
//		}else{
//			if(!Reg.test(Phone.value)){ 
//			Phonep.innerHTML="手机号码有误，请重填";
//		}else{
//				Phonep.innerHTML="正确";
//				return true;
//			}
//		
//  }
//
//      
//}
//	
//	var is_true = phone1();
//	console.log(is_true)
//	
//	
//	register.onclick = function(){
//		if(is_true){
//		//存储cookie
//				document.cookie="phone="+Phone.value;
//				console.log(cookie);
//				document.location="dengluye.html";
//				/*setInterval(function(){
//					alert("正在注册，请稍后");
//				document.location="shouye.html";
//					
//				},15000);*/
//	}
//	}
//	
//	
//	
//	
//		var a=true;
//		function fun(){
//			var kk=document.getElementById("kk");
//			kk.src="img/checked.jpg";
//			if(a==true){
//				kk.src="img/checked.jpg";
//				a=false;
//			}else{
//				kk.src="img/rtm7sigx.bmp";
//				a=true;
//			}	
//		}
			var userName=document.getElementById("username");
			var passWord=document.getElementById("password");
			var register=document.getElementById("register");
			
			//表单验证
//			username.onblur=function(){
			register.onclick=function(){
				if(userName.value=="" || userName.value=="null"){
					phonep.innerHTML="请输入手机号";
					return;
				}else{	
						var Reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9])\d{8}$/;
						if(Reg.test(userName.value)){
							phonep.innerHTML="正确";
						}else{
							phonep.innerHTML="手机号码有误，请重填";
							
						}
					}
				
//				passWord.onblur=function(){
				if(passWord.value=="" ||passWord.value=="null"){
					PassWordP.innerHTML="请输入密码";
					return;
				}else{
						var Reg1=/^\w{6,16}$/;
						if(Reg1.test(passWord.value)){
							PassWordP.innerHTML="正确";
						}else{
							PassWordP.innerHTML="请重新输入密码";
						}
					}
				
				//存储cookie
				document.cookie="username="+userName.value;expires="Thu, 6 Dec 2018 12:00:00 GMT"
				document.cookie="password="+passWord.value;expires="Thu, 6 Dec 2018 12:00:00 GMT"
				
				//跳转页面
				document.location="oppo.html";
			}
			}
		
        