
//获取非行内样式
	function getStyle(ele,attr){
		if(getComputedStyle){
			return getComputedStyle(ele,false)[attr];
		}else{
			return ele.currentStyle[attr];
		}
	}
function move(ele,data,callback){
		clearInterval(ele.timer);
		ele.timer=setInterval(function(){
		var onoff=true;
		for(var i in data){
		var iNow=parseInt(getStyle(ele,i))
		var speed=(data[i]-iNow)/6;
		speed=speed<0?Math.floor(speed):Math.ceil(speed);
		if(data[i]!=iNow){
			onoff=false;
		}
		ele.style[i]=iNow+speed+"px";
		}
		if(onoff){
			clearInterval(ele.timer);
			callback && callback();
			}
		},60)
}