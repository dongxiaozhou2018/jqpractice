$(document).ready(function () {

    $("#fathermenu").click(function () {
        $("#u1").toggle();
    })
    $("#l1").mouseover(function () {
        $("#l1").css("background-color","lightgreen");
    })
    $("#l2").mouseover(function () {
        $("#l2").css("background-color","lightgreen");
    })
    $("#l3").mouseover(function () {
        $("#l3").css("background-color","lightgreen");
    })
    $("#l4").mouseover(function () {
        $("#l4").css("background-color","lightgreen");
    })
    $("#l5").mouseover(function () {
        $("#l5").css("background-color","lightgreen");
    })
    $("#l5").mouseout(function () {
        $("#l5").css("background-color","white");
    })
    $("#l4").mouseout(function () {
        $("#l4").css("background-color","white");
    })
    $("#l3").mouseout(function () {
        $("#l3").css("background-color","white");
    })
    $("#l2").mouseout(function () {
        $("#l2").css("background-color","white");
    })
    $("#l1").mouseout(function () {
        $("#l1").css("background-color","white");
    })
//制作登陆框特效
$("input").focus(function () {
    $(this).addClass("blue");
})
$("input").blur(function () {
    $(this).removeClass("blue");
})
//制作团购网主页
$(".limenu1").hover(function () {
    $(".limenu1").css("background-color","green");
})



})