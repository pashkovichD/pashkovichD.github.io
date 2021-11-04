function sendAjaxForm(result_form, ajax_form, url) {    
    $.ajax({
        url:     url, //url (action_ajax_form.php)
        type:     "POST",
        dataType: "html",
        data: $("#"+'contact-form').serialize(),
        success: function(res) {
            result = $.parseJSON(res);
            $(document).mouseup(function (e){ // click по web документу
                var div = $('.form__result'); // ID или class элемента
                if (!div.is(e.target) // если click был не по элементу
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам            
                    div.attr('class', 'form__result');
                }
            });

            
            if(result.status) {
                $('.form__result').html(result.msg).addClass('form__result--succesfull');
            } else {
                $('.form__result').html(result.msg).addClass('form__result--error');
            }
        },
        error: function(err) {
            
        }
    });
}