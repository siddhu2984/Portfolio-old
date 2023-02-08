$("img.inst").hover(function(){
    $("img.inst").attr("src","images/insta.png").height('26px');
})

$("img.inst").on("mouseleave",function(){
    $("img.inst").attr("src","images/instagram.png").height('20px');
})

$("img.fb").hover(function(){
    $("img.fb").attr("src","images/fb.png").height('26px');
})

$("img.fb").on("mouseleave",function(){
    $("img.fb").attr("src","images/fb1.png").height('20px');
})

$("img.li").hover(function(){
    $("img.li").attr("src","images/li.png").height('26px');
})

$("img.li").on("mouseleave",function(){
    $("img.li").attr("src","images/li1.png").height('20px');
})

$("img.gt").hover(function(){
    $("img.gt").attr("src","images/gt.png").height('26px');
})

$("img.gt").on("mouseleave",function(){
    $("img.gt").attr("src","images/gt1.png").height('20px');
})

$("input.fm").onclick(function(){
    $("input.fm").css("background-color","white");
})

// $("input.btn12").click(function(){
//     $("input.fm").reset();
// })
