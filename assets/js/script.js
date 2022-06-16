// products slider
$(".fs-all-products__products-wrapper").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// testimonial slider script
$(".fs-testimonials__carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
});

// store content script
$(".fs-store_content__gallery").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // arrows: true,
  // infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
  ],
});
