$('#plein').click(function () {
    const plein = $('.sous-container').children().addClass('plein');
    plein.removeClass('vide');

})

$('#vide').click(function () {
    const vide = $('.sous-container').children().addClass('vide');
    vide.removeClass('plein');
})

$('.cercle').click(function () {
    $(this).toggleClass('plein');
})



$('.cube').click(function () {
    $(this).toggleClass('plein');
    $(this).siblings().toggleClass('plein');
})

$('.losange').click(function () {
    $(this).toggleClass('plein');
    $(this).siblings().toggleClass('plein');
    const premierCercle = $('.sous-container').children().get(2);
})
