$(function(){
    var getName = ['img','h1','money'];
    var results = [];
    for(var n = 0;n < getName.length;n++){
        results[n] = $.cookie(`goods_${getName[n]}`);
    }
    var str_ul = ``;
    str_ul=$(`
    <div class="spc_check"></div>
            <ul>
            <img src="${results[0]}" alt="" class="spc_img">
            <div class="spc_commodity">
              <div class="spc_detail">${results[1]}</div>
            <div class="spc_price">
              <div class="spc_sign">￥</div>
              <div class="spcc_price">${results[2]}</div>
            </div>
            <div class="spc_number">
              <div class="spc_reduce">-</div>
              <div class="spc_amount">1</div>
              <div class="spc_increase">+</div>
            </div>
            <div class="spc_delete">删除</div>
            </div>
            </ul>
            <div class="spc_complimentary">
              <div class="spc_sign">赠品</div>
              <div class="spcs_img"></div>
              <h2>布艺蓝牙音箱&nbsp;&nbsp;蓝色</h2>
            </div> 
    
    `)
    var sum = `${results[2]}`;
    $(str_ul).appendTo($(".specific_sp"))
    $('.spc_limitc').html(`${results[2]}`)
    var num = $(".spc_amount").html()
    console.log(num) 
    $('.spc_increase').click(function(){
        num++;
        $(".spc_amount").text(num)
        $('.spc_limitc').html(sum*num)
    })
    $('.spc_reduce').click(function(){
        if(num!=1){
            num--;
        }
        $(".spc_amount").text(num)
        $('.spc_limitc').html(sum*num)
    })
    
})