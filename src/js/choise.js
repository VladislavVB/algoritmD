$(document).ready(function () {
    let peopleLinkItem = $('.people-link');

    peopleLinkItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible')
        $(activeContent).toggleClass('visible');

        $('.choice-circle-active').toggleClass('choice-circle-active')
        $(this).toggleClass('choice-circle-active');
    });
});