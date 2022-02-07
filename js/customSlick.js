$(document).ready(function () {
    $('.person-slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left.svg" alt=""></span>',
        nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right.svg" alt=""></span>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});