// top a 
function appear(){
    this.oa=document.querySelector("#ap");
    this.appear=document.querySelector(".appear");
    this.aa=document.querySelectorAll(".appear a")
    var that=this;
    this.oa.onmouseover=function(){
         for(var i=0;i<this.aa.length;i++){
            this.appear.style.display="block";
            this.aa[i].onmouseout=function(){
            that.appear.style.display=that.appear.style.display=="none"?"block":"none";
            }
        }
       }.bind(this)
}
new appear();
// 下拉框的显示
function select(){
    this.span=document.querySelector("header .sea");
    this.ul=document.querySelector("header .sele");
    this.li=document.querySelectorAll("header .sele li");
    this.init();
    }
    select.prototype.init=function(){
        var that=this;
        this.span.onclick=function(){
            that.ul.style.display="block";
        }
        for(var i=0;i<this.li.length;i++){
            this.li[i].onmouseover=function(){
                this.onclick=function(){
                    that.span.innerHTML=this.innerHTML;
                    that.ul.style.display="none";
                }
                that.ul.style.display="block";
            }
            this.ul.onmouseout=function(){
                that.ul.style.display="none";
            }
        }
    }
    new select();
    // 轮播图
     //banner图
     function changeLayers(){
        this.oa=document.querySelectorAll("main .mt-c a");
        this.input=document.querySelectorAll("main .btns input");
        this.left=document.querySelector("#left");
        this.right=document.querySelector("#right");
        this.index=0;//要走的
        this.iprev=0;//要进来的
        this.timer=0;
        this.init()
    } 
    changeLayers.prototype.init=function(){
        //计算索引
        var that=this;
        for(var i=0;i<this.input.length;i++){
        this.input[i].onmouseover=function(){ 
                clearInterval(this.timer)
            }.bind(this)
            this.input[i].onmouseout=function(){  
                        clearInterval(that.timer)
                    that.timer=setInterval(function(){
                            that.changeIndex("1")
                        },3000)
                    }
                }
        this.left.onclick=function(){
            that.changeIndex(-1)
        }
        this.right.onclick=function(){
            that.changeIndex(1)
        }
        clearInterval(this.timer);
        this.timer=setInterval(function(){
            that.changeIndex(1)
        },3000)
    }
    changeLayers.prototype.changeIndex=function(x){
        clearInterval(this.timer);
        if(x==1){
            if(this.index==this.oa.length-1){
                this.index=0;
                this.iprev=this.oa.length-1;
            }else{
                this.index++;
                this.iprev=this.index-1;
            }
        }else{
            if(this.index==0){
                this.index=this.oa.length-1;
                this.iprev=0;
            }else{
                this.index--
                this.iprev=this.index+1;
            }
        }
        this.display(x);
    }
    changeLayers.prototype.display=function(x){
        //0走1进来
        this.oa[this.iprev].style.left=0;
        //移动到哪
        move(this.oa[this.iprev],{left:-this.oa[0].offsetWidth*x})
        //要进来的
        this.oa[this.index].style.left=x*this.oa[0].offsetWidth+"px";
        move(this.oa[this.index],{left:0})
    
    }
   new changeLayers()
   