// home person-slider
$(document).ready(function () {
    $('.person-slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left.svg" alt=""></span>',
        nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right.svg" alt=""></span>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });
});

// home highlight slider
$(document).ready(function () {
  $('.highlight-slider-container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
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

// home highlight slider
$(document).ready(function () {
  $('.testimony-slider-container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left-white.svg" alt=""></span>',
      nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right-white.svg" alt=""></span>',
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


// service inspire slider

$(document).ready(function () {
  $('.inspire-slider-body').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left.svg" alt=""></span>',
      nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right.svg" alt=""></span>',
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
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

// service inspire slider

$(document).ready(function () {
  $('.resources-slider-body').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left.svg" alt=""></span>',
      nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right.svg" alt=""></span>',
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
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

// view-service-slider-container

// view service slider


// service inspire slider

// $(document).ready(function () {
//   $('.blog-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: '<span class="person-prev-arrow"><img src="./assets/icons/arrow-left.svg" alt=""></span>',
//     nextArrow: '<span class="person-next-arrow"><img src="./assets/icons/arrow-right.svg" alt=""></span>',
//     responsive: [
//       {
//         breakpoint: 1300,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });