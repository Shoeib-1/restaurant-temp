$(".breakFast").click(function(){
    $("#asnaf1").css("display" ,"block")
    $("#asnaf2").css("display" ,"none")
    $("#asnaf3").css("display" ,"none")
});

$(".lunch").click(function(){
    $("#asnaf1").css("display" ,"none")
    $("#asnaf2").css("display" ,"block")
    $("#asnaf3").css("display" ,"none")
})
$(".lunch").hover(function(){
 $(".asnaf2").css("background-image","linear-gradient(to right ,rgba(0, 255, 255, 0.178) ,white)");
 $(".asnaf2").css("border-radius","15px");
});

$(".dinner").click(function(){
    $("#asnaf1").css("display" ,"none")
    $("#asnaf2").css("display" ,"none")
    $("#asnaf3").css("display" ,"block")
})

$(".dinner").hover(function(){
    $(".asnaf3").css("background-image","linear-gradient(to left ,rgba(0, 255, 255, 0.178) ,white)");
    $(".asnaf3").css("border-radius","15px");
   });