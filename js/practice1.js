$(document).ready(function () {
    // $("#div1").css("width","100px");
    // $("#div1").css("height","100px");
    // $("#div1").css("background-color","red");
    //
    // $("#div1").next().css(
    //     {
    //         "background-color":"black",
    //         "width":"1000px",
    //         "height":"150px"
    //     });

    // var content = $("#div1").html();
    // console.log(content);

    //点击事件
    // $(document).click(function () {
    //     //添加元素节点
    //     $("#div1").append($("<p>这是一个段落</p>"));
    // })
    //
    var  cl =0;

    $("#div1").click(function () {

        if (cl<1) {
            $("#answer").append("<p>解答：</p>");
            $("#answer").append("<p>jQuery是一个JavaScript库</p>");
            $("#answer").append("<p>jQuery极大的简化了JavaScript编程</p>");
            $("#answer").append("<p>jQuery很容易学习。</p>");
            cl++;
        }
    });

})