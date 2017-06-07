
var status1 = 0;
var status2 = 0;
var status3 = 0;
var zz = /^1[34578]\d{9}$/;  //检测手机号

$(".name").change(function () {
    var nums = $(this).val();
    if(nums == ''){
        alert("请输入手机号");
        status1 = 0;
        $(".login").css({"background-color":'#e0e0e1'});
        $(".login").css({"color":'#bfbfbf'});
    }
    else if(!zz.test(nums)){
        alert("请输入正确手机号");
        status1 = 0;
        $(".login").css({"background-color":'#e0e0e1'});
        $(".login").css({"color":'#bfbfbf'});
    } else {
        status1 = 1;
    }
});

$(".name-icon").click(function () {
    $(".name").val('');
});

var pwd = /^[\w]{6,12}$/;      //判断密码格式

// var username = $(".name").val();
$(".Pwd").change(function () {
    var nums = $(".Pwd").val();
    if(nums == ''){
        status2 = 0;
        $(".login").css({'background-color' : '#e0e0e1'});
        $(".login").css({"color":'#bfbfbf'});
    }
    else if(!pwd.test(nums)){
        status2 = 0;
        $(".login").css({'background-color' : '#e0e0e1'});
        $(".login").css({"color":'#bfbfbf'});
    }
    else{
        status2 = 1;
    }
});


$(".name").keyup(function () {
    $(".name-icon").css({"display":"block"});
    if($(".name").val().length == 0){
        $(".name-icon").css({"display":"none"});
    }
});


$(".Pwd").keyup(function () {
    $(".Pwd-icon-left").css({"display":"block"});
    if($(".Pwd").val().length == 0){
        $(".Pwd-icon-left").css({"display":"none"});
    }
});

$(".Pwd-icon-right").click(function () {
    $(".Pwd").attr("type","text");
    $(this).css({"color":'#000'});
});

$(".Pwd-icon-left").click(function () {
    $(".Pwd").val('');
});

$(".Pwd").keyup(function () {
    if(status1 == 1 && status2 == 1){
        $(".login").css({"background-color":'#de3d96'});
            $(".login").css({"color":'#fff'});
    } else {
        $(".login").css({'background-color' : '#e0e0e1'});
        $(".login").css({"color":'#bfbfbf'});
    }
});