
var zz = /^1[34578]\d{9}$/;  //检测手机号
var nums = null;
$(".mobile-phone").keyup(function () {
    nums = $(this).val();
    if(nums == ''){
        // alert("手机号码不为空");
        $(".next").css({"background-color":'#de3d96'});
        $(".next-step").css({"color":'#fff'});
    }
    else if(!zz.test(nums)){
        // alert("格式错误");
        $(".next").css({"background-color":'#de3d96'});
        $(".next-step").css({"color":'#fff'});
    }
    // else if(zz.test(nums)){
    //     $(".next").css({"background-color":'#de3d96'});
    //     $(".next-step").css({"color":'#fff'});
    // }
});


$(".mobile-phone").keyup(function () {
    if($(".mobile-phone").val().length == 0){
        $(".next").css({"background-color":'#e0e0e1'});
        $(".next-step").css({"color":'#bfbfbf'});
    }
});



$(".next-step").click(function () {
    if(zz.test(nums)){
        location.href = "registered2.html";
    } else {
        alert('请输入正确的手机号');
    }
});