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
function setImg(){//�����ú�step��ֵ��ȵ���һ��ͼƬ�Ĳ㼶Ϊ1��������ͼƬ�㼶����Ϊ0
    for(var i= 0;i<imgs.length;i++){
        var curImg=imgs[i];
        if(i==step){
            utils.css(curImg.parentNode,"zIndex",1);
            //���㼶�Ѿ����֮����͸�������̴�0�˶���1
            animate(curImg.parentNode,{opacity:1},500,function(){
                var siblings=utils.siblings(this);
                //���˵�ǰ�˶�Ԫ�ص������ֵܽڵ㣨Ҳ���ǳ��˸ող㼶��ߵ��Ǹ�ͼƬ����֮������к��ӣ�
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],'opacity',0);
                }
            });
        }else{
            utils.css(curImg.parentNode,"zIndex",0);
        }
    }
    //�������
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