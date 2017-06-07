
//检测验证码
var a = Math.floor(Math.random()*10)+''+
    Math.floor(Math.random()*10)+''+
    Math.floor(Math.random()*10)+''+
    Math.floor(Math.random()*10);

$(".obtain-code").click(function () {
    $(".space").text(a);
    $(".verification").change(function () {
        if($(".verification").val() == ''){
            alert("请输入验证码！");
        } else if ($(".verification").val()!== a){
            alert('请输入正确的验证码！');
        } else {
            alert("验证码正确！");
        }
    })
});

var i =10;  //倒计时的总时间
var status = true;  //代表没有计时器在运行
var set;

$(".obtain-code").click(function () {
    if(status){
        time();
        status = false;
    }
});

function time() {
    set = setInterval(function () {
        if(i > 0){
            i--;
            $(".obtain-code").text(i+''+'s');
        } else {
            i = 10;
            clearInterval(set);
            $(".obtain-code").text("点击重新发送");
            status = true;
        }
    },1000)
}


var pwd = /^[\w]{6,12}$/;      //判断密码格式
var nums = null;
$(".password").keyup(function () {
    nums = $(this).val();
    if(nums == ''){
        // alert("请设置密码");
        $(".registered").css({'background-color' : '#e0e0e1'});
        $(".registered").css({"color":'#bfbfbf'});
    }
    else if(!pwd.test(nums)){
        // alert("格式错误");
        $(".registered").css({'background-color' : '#e0e0e1'});
        $(".registered").css({"color":'#bfbfbf'});
    }
    else if(pwd.test(nums)){
        $(".registered").css({"background-color":'#de3d96'});
        $(".registered").css({"color":'#fff'});
    }
});


$(".password").keyup(function () {
    $(".icon-left").css({"display":"block"});
    if($(".password").val().length == 0){
        $(".icon-left").css({"display":"none"});
    }
});


$(".icon-right").click(function () {
    $(".password").attr("type","text");
    $(this).css({"color":'#000'});
});

$(".icon-left").click(function () {
    $(".password").val('');
});


$(".registered").click(function () {

    location.href = "login.html";
});

