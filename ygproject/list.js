$(function(){
    $.get('data/data.json',function(result,statusText,xhr){
        var str_list = ``;
        var if_list = false;
        if(if_list == false){
            for(let n = 0;n<result.length;n++){
                str_list = $(`<div class="productName" >
                <img src="${result[n].img}" alt="">
                  <span>${result[n].span}</span>
                  <h1>${result[n].h1}</h1>
                  <div class="money"><span>￥</span>${result[n].money}</div>
                  <div class="add" id="${n}">加入购物车</div>
              </div>`);
                $(str_list).appendTo($(".lic_center"))
            }
            $(".lic_center").on("click",".add",function(){
                var m = parseInt(this.id)
                console.log(this.id)
                $.cookie("goods_img",result[m].img,{expires:7});
                $.cookie("goods_h1",result[m].h1,{expires:7});
                $.cookie("goods_money",result[m].money,{expires:7});
                location.href = 'shoppingCar.html'
            })
        }
        
        return if_list = true;
    })
    
})