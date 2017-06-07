/**
 * Created by 49580 on 2017/5/31.
 */
var slide =document.getElementsByClassName("slide-lkj");
var load =document.getElementsByClassName("slide-load")[0];

var wid =document.documentElement.clientWidth;
var hei=document.documentElement.clientHeight;
//console.log(slide)
//console.log(wid);
load .style.width=wid+"px";
load .style.height=hei+"px";
for (var i=0;i<slide.length;i++)
{

    //slide[i].style.width=wid+"px";
    slide[i].style.height=hei-65+"px";
    // console.log(atr.style.width);
}
var slideb =document.getElementsByClassName("slide-bj");

;(function () {
    $(".bg-load").css({
        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight
    });
   $da= setTimeout(function () {
        $(".bg-load").css({
            opacity: "0",
            display: "none"
        });
        $(".content-load").css({
            opacity: "1",
            display: "block"
        })
       $("body").css({
           overflowY:" scroll"
       })
    }, 2000)

})();
