var banner=document.getElementsByClassName('banner')[0];
var bannerInner=utils.getElesByClass('bannerInner',banner)[0];
var ul=utils.getElesByClass('focusList',banner)[0];
var lis=ul.getElementsByTagName('li');
var imgs=bannerInner.getElementsByTagName('img');
/*(function getData(){
 var xhr=new XMLHttpRequest();
 xhr.open("get","data2.txt?_="+Math.random(),false);
 xhr.onreadystatechange=function(){
 if(xhr.readyState==4&&xhr.status==200){
 window.data=utils.jsonParse(xhr.responseText);
 }
 };
 xhr.send(null);
 })();
 (function(){
 if(window.data){
 for(var i=0;i<data.length;i++){
 var imgSong=document.createElement('img');
 imgSong.realSrc=data[i].src;
 }
 imgBox.appendChild(imgSong);
 }
 })();
 (function imgLoad(){
 for(var i=0;i<imgs1.length;i++){
 var curImg=imgs1[i];
 var tempImg=document.createElement('img');
 tempImg.src=curImg.getAttribute('realSrc');
 tempImg.index=i;
 tempImg.onload=function(){
 imgs1[this.index].src=this.src;
 utils.css(imgs1[this.index],'display','block');
 //animate(imgs1[this.index],{opacity:1},1000);
 };
 }
 })();*/