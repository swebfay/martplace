$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        spacing: "5px",
        ratedFill: "#ffc000",
        readOnly: true
      });

      $('.week-prod__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.prev-button-slick',
        nextArrow: '.next-button-slick',
      });

      var mixer = mixitup('.new-product__inner-box');


      $('.feed-slider__item-wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '.prev-button-slick2',
            nextArrow: '.next-button-slick2',
            arrows: true,
            infinity: true,
            responsive: [
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 520,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
          });

  });