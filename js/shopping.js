$(function () {
    var list = [
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
        {
            src: "images/shopping2.jpg",
            font: "欧莱雅&nbsp;|&nbsp;复颜紧致日霜+晚霜+眼妆抗皱组合",
            dollar: "￥542",
            line: "￥894",
            discount: "6.1折",
            reduction: "满减",
            firming: "提拉紧致",
        },
    ];

    // 渲染页面方法
    function lists(json) {
        var list =
                    '<div class="content" >'+
                        '<img src="'+json.src+'" width="25%">'+
                            '<div class="details">'+
                                '<div class="detail">'+
                                    '<p class="font">'+json.font+'</p>'+
                                    '<div class="money">'+
                                        '<div class="dollar">'+json.dollar+'</div>'+
                                        '<div class="line">'+json.line+'</div>'+
                                        '<div class="discount">'+json.discount+'</div>'+
                                    '</div>'+
                                    '<div class="reduction">'+json.reduction+'</div>'+
                                '</div>'+
                                '<div class="firming">'+json.firming+'</div>'+
                            '</div>'+
                    '</div>';
        return list;
    };


    // page渲染页面

    function page(list) {
        $.each(list, function (key, val) {
            $(".all").append(lists(val));
            console.log(lists(val));
        })
    }

        page(list); //调用压面渲染接口/方法

})