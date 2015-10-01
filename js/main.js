$(document).ready(function(){

    // popup
    (function() {

        var $popup = $('.js-popup');

        $popup.each(function() {
            var $this = $(this);

            if ($this.hasClass('popup-ajax')) {
                $this.magnificPopup({
                    type: 'ajax'
                });
            }
        });

    })();

    // forms processing
    (function() {

        $(document).on('submit', '.js-form', function(event) {
            event.preventDefault();

            var $thisForm = $(this),
                $formErrors = $thisForm.find('.form-errors');

            var showError = function(message) {
                var $errorItem = $('<div>').addClass('form-error').html(message);
                $formErrors.append($errorItem);
                window.setTimeout(function() {
                    $errorItem.remove();
                }, 5000);
            };


            $.ajax(
                $thisForm.attr('action'),
                {
                    method: $thisForm.attr('method'),
                    data: $thisForm.serializeArray()
                }
            )
                .done(function(data, status) {
                    if (data.status!="success") {
                        showError(data.statusMessage);
                    }
                    else {

                        if ($thisForm.hasClass('form-beta')) {
                            $.magnificPopup.open({
                                type: 'ajax',
                                items: {
                                    src: 'request-beta-result.html'
                                }
                            });
                        }
                        else if ($thisForm.hasClass('form-subscribe')) {
                            $thisForm.closest('.b-request').addClass('show-result');
                        }

                    }
                })
                .error(function(data, status) {
                    showError(data.responseText);
                });

        });
    })();

    // scroll to #request
    (function() {

        var $button = $('.js-scroll-request'),
            $target = $("#request");

        $button.on('click', function(e) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: $target.offset().top
            }, 500);
        });

    })();

});

$(window).load(function() {

    (function() {
        $('html').addClass('js-load-bg');
    })();

});