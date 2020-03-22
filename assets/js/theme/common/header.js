export default function () {
    const $header = $('header');

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            $header.addClass('scroll');
        } else {
            $header.removeClass('scroll');
        }
    });
}
