$(document).ready(function(){

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

});

$(window).load(function() {

    (function() {
        $('html').addClass('js-load-bg');
    })();

});