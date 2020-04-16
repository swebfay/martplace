$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        spacing: "5px",
        ratedFill: "#ffc000",
        readOnly: true
      });

      $('.weekprof-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.prev-button-slick',
        nextArrow: '.next-button-slick',
      });







      
      

    //   $('.next-button-slick').click(function(){
    //     $('#portfolio-carousel').slick("slickNext");
    // });
    
    // $('.prev-button-slick').click(function(){
    //     $('#portfolio-carousel').slick("slickPrev");
    //  });

    // var mixer = mixitup('.products__inner-box');



// $(".product-slider__inner").slick({
  
// });

    

    //   $('.thumbs').slick({
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider__inner',
    //     dots: false,
    //     arrows: false,
    //     infinity: true,
    //     focusOnSelect: true,
    //     responsive: [
    //       {
    //         breakpoint: 960,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 520,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       }
    //     ]
    //   });

    //   $('.top-bar__btn').on('click', function(){
    //     $('.header__menu-list').slideToggle();
    //   });

  });