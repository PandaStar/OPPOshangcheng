window.onload=function(){
				var slide=document.getElementById("slide");
				var dian=document.getElementById("dian");
				var lis=dian.getElementsByTagName("li");
			    
			    var uls=document.getElementById("uls");
			    var Imgs=uls.getElementsByTagName("li");
			    var dir=document.getElementById("dir");
			    var I=dir.getElementsByTagName("img");
			    var move=0;
				//鼠标移上去
				var interval;
				
				for(var i=0;i<lis.length;i++){
					lis[i].index=i;
					lis[i].onmouseover=function(){
						for(var j=0;j<lis.length;j++){
							lis[j].className="";
							Imgs[j].className="";
						}
						this.className="active";
						Imgs[this.index].className="show";
					}
				}
				function hide(){
					for(var j=0;j<lis.length;j++){
							lis[j].className="";
							Imgs[j].className="";
						}
				}
				//自动播放
				function moveR(){
					for(var j=0;j<lis.length;j++){
							lis[j].className="";
							Imgs[j].className="";
						}
					move++;
					if(move>lis.length-1){
						move=0;
					}
					lis[move].className="active";
					Imgs[move].className="show";
				}
				
				interval=setInterval(moveR,1800); //定时器
				slide.onmouseover=function(){
					clearInterval(interval);
				}
				slide.onmouseout=function(){
					interval=setInterval(moveR,1800);
				}
				I[0].onclick=function(){
					for(var j=0;j<lis.length;j++){
							lis[j].className="";
							Imgs[j].className="";
						}
					move--;
					if(move<0){
						move=lis.length-1;
					}
					lis[move].className="active";
					Imgs[move].className="show";
				}
				I[1].onclick=moveR;
			}




    
   
   
   
   
   
   
   var sousuo=document.getElementById("sousuo");
    var ss=document.getElementById("ss");
        var a=true;
		function change(){
			ss.style.display="none";
			if(a==true){
				ss.style.display="block";
				a=false;
			}else{
				ss.style.display="none";
				a=true;
			}		
		}