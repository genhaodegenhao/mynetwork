var as=document.querySelectorAll(".navbar .navbar-nav li a");var swipers=document.querySelector(".lunbo .swiper-wrapper");var ups=document.querySelector(".up");var downs=document.querySelector(".down");for(i=0;i<as.length;i++){as[i].index=i;as[i].onclick=function(){index=this.index;for(i=0;i<as.length;i++){as[i].className="";}
this.className="active";swipers.style.transform="translate3d"+"(0,"+(-index*928)+"px,0)";}}
var count=0;function next(){count++;if(count>7){count=7;}
for(i=0;i<as.length;i++){as[i].className="";}
as[count].className="active";swipers.style.transform="translate3d"+"(0,"+(-928*count)+"px,0)";}
function prev(){count--;if(count<0){count=0;}
for(i=0;i<as.length;i++){as[i].className="";}
as[count].className="active";swipers.style.transform="translate3d"+"(0,"+(-928*count)+"px,0)";}
downs.onclick=next;ups.onclick=prev;var ff=window.navigator.userAgent.indexOf("Firefox");if(ff==-1){swipers.onmousewheel=wheel;}else{swipers.addEventListener("DOMMouseScroll",wheel,false);}
function wheel(e){var ev=e||window.event;if(ev.detail){if(ev.detail>0){next();}else{prev();}}else{if(ev.wheelDelta>0){prev();}else{next();}}}
var move_text=document.querySelector(".section_page1 .page1_text2 .move_text");var text_lis=document.querySelectorAll(".section_page1 .page1_text2 .move_text li");var num=0;function move_up(){if(num>3){num=0;}
move_text.style.top=-num*20+"px";num++;}
var tim=setInterval(move_up,3000);var bg_pic=document.getElementsByName("bg_pic");var pics=document.getElementsByName("pic");var bg=document.querySelectorAll(".wrap ul li .bg");var lis=document.querySelectorAll(".wrap ul li");function package(lis,bg_pic,c1,bg,pics,pic1){lis.onmouseenter=function(){bg_pic.className="cc c1 active2";bg.style.display="block";bg.className="bg active3";pics.style.display="block";pics.className="cc pic1 active1";}
lis.onmouseleave=function(){bg_pic.className="cc c1";bg.style.display="none";pics.style.display="none";}}
package(lis[0],bg_pic[0],c1,bg[0],pics[0],pic1);package(lis[1],bg_pic[1],c1,bg[1],pics[1],pic1);package(lis[2],bg_pic[2],c1,bg[2],pics[2],pic1);package(lis[3],bg_pic[3],c1,bg[3],pics[3],pic1);var col_md=document.querySelectorAll(".section_page3 .col-md-4");var mask1=document.querySelectorAll(".section_page3 .col-md-4 .page3_mask1");var mask2=document.querySelectorAll(".section_page3 .col-md-4 .page3_mask2");var text_p=document.querySelectorAll(".section_page3 .col-md-4 .page3_text");for(i=0;i<col_md.length;i++){col_md[i].index=i;col_md[i].onmouseenter=function(){mask1[this.index].style.transform="translateY(0)";mask2[this.index].style.transform="translateY(0)";text_p[this.index].style.color="white";}
col_md[i].onmouseleave=function(){mask1[this.index].style.transform="translateY(-200px)";mask2[this.index].style.transform="translateY(100px)";text_p[this.index].style.color="";}}
var boxer=document.getElementById("boxer");var lis1=document.querySelectorAll(".section_page4 li");var box=document.getElementById("smallbox");for(i=0;i<lis1.length;i++){lis1[i].index=i;lis1[i].onmouseenter=function(){var _left=this.offsetLeft;var _top=this.offsetTop;var _this=this.index;var Pwidth=lis1[0].offsetWidth;box.style.left=_left+"px";box.style.top=_top+"px";var x=_this*Pwidth*(-1);this.style.backgroundPosition=x+"px -150px";box.style.display="block";}
lis1[i].onmouseleave=function(){var _this=this.index;var Pwidth=lis1[0].offsetWidth;var x=_this*Pwidth*(-1);this.style.backgroundPosition=x+"px 0px";}}
boxer.onmouseleave=function(){box.style.display="none";}
var show_hide=document.getElementById("show-hide");var side_list=document.getElementById("side_list");var bol=true;show_hide.onclick=function(){if(bol){show_hide.style.backgroundPosition="-32px -639px";side_list.className="FadeOut";bol=false;}else{show_hide.style.backgroundPosition="0 -640px";side_list.className="FadeIn";bol=true;}}
var lis2=document.querySelectorAll("#side_list .lis");var is=document.querySelectorAll("#side_list .lis i");var msg=document.querySelectorAll("#side_list .email div");for(i=0;i<lis2.length;i++){lis2[i].index=i;lis2[i].onmouseenter=function(){is[this.index].style.opacity=0.3;msg[this.index].className="email_msg comeIn";}
lis2[i].onmouseleave=function(){is[this.index].style.opacity=0.7;msg[this.index].className="email_msg";}}