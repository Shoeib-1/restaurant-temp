$(".Card1").click(function(){
   $(".menu-page").css("display" ,"none");
   $(".dialog").css("display" ,"block");
});

$(".dialog-button").click(function(){
    $(".menu-page").css("display" ,"block");
    $(".dialog").css("display" ,"none");
 });

//  display  Card-para
$(".Card-para").hover(function(){
    $(".click-order").slideDown("slow");   
 });





