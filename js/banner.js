var banner2=utils.getElesByClass('banner')[0];
var bannerInner2=utils.getElesByClass('bannerInner',banner2)[0];
var focusList2=utils.children(banner2,'ul')[0];
/*var left1=utils.getElesByClass('left',banner2)[0];
var right1=utils.getElesByClass('right',banner2)[0];*/
var imgs=bannerInner2.getElementsByTagName('img');
var lis=focusList2.getElementsByTagName('li');
var timer=window.setInterval(autoMove,2000);
step=0;
setImg();
function autoMove(){
    step++;
    if(step==imgs.length){
        step=0;
    }
    setImg();
}
function setImg(){//负责让和step的值相等的那一张图片的层级为1，其他的图片层级设置为0
    for(var i= 0;i<imgs.length;i++){
        var curImg=imgs[i];
        if(i==step){
            utils.css(curImg.parentNode,"zIndex",1);
            //当层级已经提高之后，让透明度立刻从0运动到1
            animate(curImg.parentNode,{opacity:1},500,function(){
                var siblings=utils.siblings(this);
                //除了当前运动元素的其他兄弟节点（也就是除了刚刚层级提高的那个图片盒子之外的所有盒子）
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],'opacity',0);
                }
            });
        }else{
            utils.css(curImg.parentNode,"zIndex",0);
        }
    }
    //焦点对齐
    for(var i= 0;i<lis.length;i++){
        lis[i].className=i===step?'selected':'';
    }
}
banner2.onmouseover=function(){
    window.clearInterval(timer);
};
banner2.onmouseout=function(){
    timer=window.setInterval(autoMove,2000);
};
(function focus(){
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
           step=this.index;
            setImg();
        }
    }
})();