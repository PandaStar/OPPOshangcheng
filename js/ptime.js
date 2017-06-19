			window.onload=function(){
			/*setInterval(方法,时间)
		 参数一：调用的这个方法，可以写方法名，直接写方法
		 参数二：隔多长时间调用一次函数
	    clearInterval(定时器)-->清除定时器
		 * */
		/*	var	Time=document.getElementById("Time");
			function aaa(){
				var day=new Date();  //创建一个日期对象2017-3-10 星期五  13:30:24
				Time.innerHTML=day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate()+":"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds();
			}
			
			var timer=setInterval(aaa,1000);
			
			Time.onmouseover=function(){
				clearInterval(timer);
			}*/
			
		var ptime=document.getElementById("Time");
		var timer=null;  //先定义一个定时器
		var timer2=null;
		//获取当前的时间的
		function Ptime(){
			//创建了一个时间对象
			var day=new Date();
			//把时间显示到p标签里
			ptime.innerHTML=day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"-"+day.getHours()+"-"+day.getMinutes()+"-"+day.getSeconds();
		}
		Ptime();
		//开一个定时器
		timer=setInterval(Ptime,1000);
		
			}