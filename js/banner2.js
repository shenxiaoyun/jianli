var banner=utils.getElesByClass('J-banner');
var song=document.getElementsByClassName('song');
function banner2(banner,song){
    var bannerInner1=utils.getElesByClass('J-son',banner)[0];
//var imgBox=utils.getElesByClass('img',banner)[0];
    /*var imgs1=banner.getElementsByTagName('img');*/
    var left=utils.getElesByClass('left',song)[0];
    console.log(left);
    var right=utils.getElesByClass('right',song)[0];
    var title=utils.prev(song);
    var list=utils.getElesByClass('list',title)[0];
    var as=list.getElementsByTagName('a');
    var uls=utils.getElesByClass('J-Song',bannerInner1);
    console.log(1);
    utils.addClass(as[0],'choose');

//�ֲ�ͼ��ʼ
    var step1=0;//Ĭ�ϵ�һ����ʾ
    function autoMove1(){//������������ֲ�
        console.log(1);
        //debugger;
        if(step1>=1){
            step1=1;
            return;
        }
        step1++;
        animate(bannerInner1,{left:step1*-750},500);
    }
    left.onclick=function(){
        if(step1<=0){

            return;
        }
        step1--;
        animate(bannerInner1,{left:step1*-750},500);
    };
    right.onclick=autoMove1;
    for(var i=0;i< as.length;i++){
        as[i].index=i;
        as[i].onclick=function(){
            uls.index=this.index;
            if(utils.css(uls[this.index],'display')=='block'){
                return;
            }
            var sib=utils.siblings(this);
            for(var i=0;i<sib.length;i++){
                utils.removeClass(sib[i],'choose');
            }
            utils.addClass(this,'choose');
            utils.css(uls[this.index],'display','block');
            utils.css(uls[this.index],'top',0);
            utils.css(bannerInner1,'left',0);
            animate(bannerInner1,{top:0},500,function(){
                step1=0;
                utils.css(uls[uls.index],'top',198);
                utils.css(bannerInner1,'top',-198);
                var siblings=utils.siblings(uls[uls.index]);
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],'display','none');
                }
            })
        }
    }
}
banner2(banner[0],song[0]);
banner2(banner[1],song[1]);
banner2(banner[2],song[2]);


/*
window.clearInterval(timer);
var speed=5;
timer=window.setInterval(function(){
    var curScrollTop=utils.win('scrollTop');
    while(curScrollTop!=t){
        if(curScrollTop>t){
            curScrollTop-=speed;
        }else{
            curScrollTop+=speed;
        }
        utils.win('scrollTop',curScrollTop);
    }
},10);
*/
