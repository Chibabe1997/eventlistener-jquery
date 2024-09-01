$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});




$("h1").on("mouseover",function(){
    $("h1").css("color","pink");
});
$("input").keypress(function(event){
   $("h1").text(event.key);
});
$("button").click(function(){
    $("h1").css("color","green");
});
$("h1").click(function(){
$("h1").css("color", "purple");
})
$("a").attr("href","https://yahoo.com");
($("img").attr("src"));
$("h1").text("BYE");
$("button").html("<em>Hey</em>");
