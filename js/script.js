
function toggleBox(){

    $(this).find('.box-hover').toggle()

}

function init(){

    $('li').hover(toggleBox)

}

$('document').ready(init);