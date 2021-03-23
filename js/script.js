
function showBox(){

    $(this).find('.box-hover').show()

}

function hideBox(){

    $('body').click(function (){
        $('.box-hover').hide();
    })
}

function init(){

    $('li').hover(showBox);
    hideBox()

}

$('document').ready(init);