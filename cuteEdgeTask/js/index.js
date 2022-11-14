$(function () {
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(window).scroll(function () {
    var scrollTopValue = $(window).scrollTop();
    console.log(scrollTopValue, typeof scrollTopValue)
    if (scrollTopValue > 0) {
      $("header").css({
        backgroundColor: "#1d1d1b",
      });
      $(".headerColors").css({
        display:'flex',
      });
    } else {
      $("header").css({
        backgroundColor: "transparent",
      });
      $(".headerColors").css({
        display:'none',
      });      
    }
  });
});
