$(function(){
    var oShp = $("#shopa")
    var oMen = $("#menus")
    
    // oShp.mouseenter(function(){
    //     oMen.css("display",'block');
//     // })
    var isclick = true//记录点击次数
    var oPull_D = $(".pull_down > div")
    var oPull_L = $(".navigation ul").find("li");
    var oNav = $(".navigation ul");
    var oPull = $(".pull_down");
    oPull_L.mouseenter(function(){
        oPull_D.css("display","none")
        oPull_D.eq($(this).index()).css("display", "block")
    })
    oPull.mouseleave(function(){
        oPull_D.css("display", "none")
    })
    oShp.on("click",function(){
        if(isclick){
            oMen.css("display",'block');
           return isclick=false;
        }
        if(!isclick){
            oMen.css("display",'none');
           return  isclick=true;
        }
    })
    oNav.mouseenter(function(){
        oPull.animate({height:'250px'});
    })
    oPull.mouseleave(function(){
        oPull.animate({height:'0px'});
    })
    var imags = ['https://dsfs.oppo.com/archives/202006/202006100306345ee08986ee224.jpg?x-oss-process=image/format,webp',
    'https://dsfs.oppo.com/archives/202006/202006100306485ee08ac081438.jpg?x-oss-process=image/format,webp',
    'https://dsfs.oppo.com/archives/202006/202006100306265ee08b5eb5072.jpg?x-oss-process=image/format,webp',
    'https://dsfs.oppo.com/archives/202006/202006100306365ee08d0c644e8.jpg?x-oss-process=image/format,webp'
    ];

   $(".body_center1>ul >li").click(function(){
        $(".body_center1 > .circle > div").css("display","none")
        $(".body_center1 > .circle > div").eq($(this).index()).css("display","block")
        $(".body_center1").css("background",`url('${imags[$(this).index()]}')`);
        $(".body_center1").css("background-size","100% 100%");

        //获取下标  根据下标改变背景图片
    })
    var bimg=[
                'https://dsfs.oppo.com/archives/202009/_thumbnail/thumbnail_202009270309485f70450cca5a5.png?x-oss-process=image/format,webp',
                'https://dsfs.oppo.com/archives/202009/_thumbnail/thumbnail_202009270309545f7045122c049.png?x-oss-process=image/format,webp',
                'https://dsfs.oppo.com/archives/202009/_thumbnail/thumbnail_202009270309575f704515b4a37.png?x-oss-process=image/format,webp',
                'https://dsfs.oppo.com/archives/202009/_thumbnail/thumbnail_202009270309015f70451931c29.png?x-oss-process=image/format,webp'
            ]
    $(".par>.sbanner>ul>li").click(function(){
        var imglength = $(this).index()*500 + "px";
        $(".sbc_center").animate({left:`-${imglength}`});
        $(".magnifying >.img").css("background",`url('${bimg[$(this).index()]}')`);
        $(".magnifying >.img").css("background-size","100% 100%");
        $(".par>.sbanner>ul>li").css("border","none") 
        $(".par>.sbanner>ul>li").eq($(this).index()).css("border-bottom","1px solid black")
    })
    //放大镜
    $(".sb_center").mouseenter(function(){
        $(".mark").css("display","block")
        $(".magnifying").css("display","block")

    })
    $(".sb_center").mouseleave(function(){
        $(".mark").css("display","none")
        $(".magnifying").css("display","none")
    })
  $(".sb_center").mousemove(function(ev){
    var l = ev.clientX - $(this).offset().left-60;
    var t = ev.clientY - $(this).offset().top+70;
        $(".mark").css({
              left: l,
              top: t
            })
        $(".magnifying .img").css({
              left: -2 * l,
              top: -2.5 * t
            })
  })
    
   
})