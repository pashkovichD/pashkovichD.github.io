function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url (action_ajax_form.php)
        type:     "POST",
        dataType: "html",
        data: $("#"+'contact-form').serialize(),
        success: function(response) {
            result = $.parseJSON(response);         
            $(document).mouseup(function (e){ // click on web document
                var div = $('.form__result'); // ID or class element
                if (!div.is(e.target) // if the click was not on the element
                    && div.has(e.target).length === 0) { // and not by its children
                    div.removeClass('form__result--show');
                }
            });

            $('.form__result').html('Thank You!').addClass('form__result--show');
        },
        error: function(response) {
            $('.form__result').html('Error');
        }
    });
}