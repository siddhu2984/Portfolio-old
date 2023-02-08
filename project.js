$("div.box1").hover(function(){
    $("p.pp1").text("Click Me");
    $("p.pp1").css("padding-left","2.0rem");
})

$("div.box1").on("mouseleave",function(){
    $("p.pp1").text("Snake Game");
    $("p.pp1").css("padding-left","0px");
})

$("div.box2").hover(function(){
    $("p.pp2").text("Click Me");
    $("p.pp2").css("padding-left","2.0rem");
})

$("div.box2").on("mouseleave",function(){
    $("p.pp2").text("Card-Mind Game");
    $("p.pp2").css("padding-left","0px");
})

$("div.box3").hover(function(){
    $("p.pp3").text("Click Me");
    $("p.pp3").css("padding-left","2.0rem");
})

$("div.box3").on("mouseleave",function(){
    $("p.pp3").text("Simen Game");
    $("p.pp3").css("padding-left","0px");
})