$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__menu a').click(function() {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');

        let targetSectionId = $(this).attr('href').substring(1);

        if ($('#' + targetSectionId).length) {
            let offsetTop = $('#' + targetSectionId).offset().top - 100;

            $('html, body').animate({
                scrollTop: offsetTop
            }, 1000);
        }

        return false;
    });
});

new Swiper('.image-slide',{
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
      },
});
