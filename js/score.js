$(document).ready(function () {

$("#t3 th").css("color","red");
$("#t3 th").css("font-size","20px");

$("#t3 tr:last").css("color","blue");

$("#t3 tr:even").css("background-color","#ffd");

$("#t3 tr:odd").css("background-color","#ddf");

$("#t3 tr:gt(4)").css("font-size","12px");

$("#t3 tr:lt(4)").css("font-size","14px");

$("#t3 hn").css("font-size","30px");

//给网页中所有的 <p> 元素添加 onclick 事件
$("p").click(function () {
    alert("想要挑战吗？")
})
//给指定表格上色
    $("#t1 tr:odd").css("background-color","red");

    $("#t1 th").css("background-color","white");

    $("#t1 th").css("color","black");

})