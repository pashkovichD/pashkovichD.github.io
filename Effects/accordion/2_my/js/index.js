(function($) {
    
	$('.accordeon__content').removeClass('accordeon__content--nojs');
	

    $('.accordeon__title').click(function(e) {
        // делаем все title'ы неактивными
        $('.accordeon__title').removeClass('accordeon__title--active');
        // делаем выбранный элемент активным (для дальнейшей стилизации)
        $(this).addClass('accordeon__title--active');

        // находим контент, который следует сразу же за нашим click'нутым элементом
        var dropDown = $(this).closest('.accordeon__item').find('.accordeon__content');

        // свернуть все контенты, кроме click'нутого элемента
        $(this).closest('.accordeon').find('.accordeon__content').not(dropDown).slideUp();        
        dropDown.stop(false, true).slideToggle();
        e.preventDefault();
    });    
})(jQuery);