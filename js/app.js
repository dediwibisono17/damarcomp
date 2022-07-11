$(".youtube__img").click(() => {
  $(".youtube__img").hide();
  $(".youtube__real").css("display", "block");
});

$(".slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  // slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".barang").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(document).ready(function () {
  new WOW().init();
  $("ul.navbar-nav li a").click(function () {
    $("li a").removeClass("active"), $(this).addClass("active");
  }),
    $(".goto").on("click", function (o) {
      if ("" !== this.hash) {
        var s = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(s).offset().top - 50,
          },
          800,
          function () {
            window.location.hash = s;
          }
        );
      }
    });
});
// $(function () {
//   $(window).scroll(function () {
//     100 < $(this).scrollTop()
//       ? $("#scroll-top").fadeIn()
//       : $("#scroll-top").fadeOut();
//   }),
//     $("#scroll-top button").click(function () {
//       $("body,html").animate(
//         {
//           scrollTop: 0,
//         },
//         800
//       );
//     });
// });
