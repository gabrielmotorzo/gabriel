(function($) {

    'use strict';

    /*
     Contact Form: Basic
     */
    $('#sendlinkForm').validate({
        submitHandler: function(form) {

            var $form = $(form),
                $messageSuccess = $('#contactSuccess2'),
                $messageError = $('#contactError2'),
                $submitButton = $(this.submitButton),
                $errorMessage = $('#mailErrorMessage');

            $submitButton.button('loading');
            var phone=["+91"+$('#phone').val()];
            var smaPayload = {
                "phone_numbers": phone,
                "message": "Thank you for your interest in MotorZo. Download the App from https://goo.gl/cbc0kV to enjoy a hassle free car service experience!"
            };
            console.log("length"+smaPayload.message.length)
            // Ajax Submit
            $.ajax({
                type: 'POST',
                url: 'http://52.77.114.42:19010/sms',
                contentType:"application/json; charset=utf-8",
                data:JSON.stringify(smaPayload),
                dataType:"json",
                beforeSend: function (xhr) {
                    /* Authorization header */
                    xhr.setRequestHeader("Authorization", "Bearer a35cfd1b-94d6-431a-a5b1-ba799dc9ddf0");
                }
            }).always(function(data, textStatus, jqXHR) {

                $errorMessage.empty().hide();

                if (textStatus) {

                    $messageSuccess.removeClass('hidden');
                    $messageError.addClass('hidden');

                    // Reset Form
                    $form.find('.form-control')
                        .val('')
                        .blur()
                        .parent()
                        .removeClass('has-success')
                        .removeClass('has-error')
                        .find('label.error')
                        .remove();

                    if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
                        $('html, body').animate({
                            scrollTop: $messageSuccess.offset().top - 80
                        }, 300);
                    }

                    $submitButton.button('reset');

                    return;

                } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
                    $errorMessage.html(data.errorMessage).show();
                } else {
                    $errorMessage.html(data.responseText).show();
                }

                $messageError.removeClass('hidden');
                $messageSuccess.addClass('hidden');

                if (($messageError.offset().top - 80) < $(window).scrollTop()) {
                    $('html, body').animate({
                        scrollTop: $messageError.offset().top - 80
                    }, 300);
                }

                $form.find('.has-success')
                    .removeClass('has-success');

                $submitButton.button('reset');

            });
        }
    });

}).apply(this, [jQuery]);