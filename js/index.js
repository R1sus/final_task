//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){
    var carusel = $(this).parents('.carousel');
    right_carusel(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){
    var carusel = $(this).parents('.carousel');
    left_carusel(carusel);
    return false;
});
function left_carusel(carusel){
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
    $(carusel).find(".carousel-items").animate({left: "0px"}, 200);

}
function right_carusel(carusel){
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
        $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
        $(carusel).find(".carousel-items").css({"left":"0px"});
    });
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
    //auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
    setInterval(function(){
        if (!$(carusel).is('.hover'))
            right_carusel(carusel);
    }, 1000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

document.querySelector(".search_img").addEventListener("click", function(){
    document.querySelector(".search_input").style.display = "block";

    document.querySelector("#basket").style.display = "none";
    document.querySelector("#basket_mob").style.display = "block";

    document.querySelector(".search_img").style.display = "none";
    document.querySelector(".search_img_active").style.display = "inline-block";
})
document.querySelector("#add_button").addEventListener("click", function() {
    document.querySelector("#add_button").style.backgroundColor="#008000";
    //document.querySelector("#item_count").innerHTML="(1)";
})


var elem = document.getElementById('item_count'),
    num = +elem.innerHTML;

function addNum()
{
    num++;
    elem.innerHTML = num;
}
