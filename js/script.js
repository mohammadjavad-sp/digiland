$(document).ready(function () {
  $("input").focus(function () {
    $("i.test").addClass("focus");
    $(this).addClass("tool");
  });
  $("body")
    .not("input")
    .click(function () {
      $("i.test").removeClass("focus");
      $("input").removeClass("tool");
    });

  $("li#li").mouseenter(function () {
    $("div#bg").addClass("jvti");
  });
  $("li#li").mouseleave(function () {
    $("div#bg").removeClass("jvti");
  });
  $(".seen-more").click(function () {
    $(".awesome").toggleClass("transform");
    $(".penhan").toggleClass("block");
    $(".seen").toggleClass("none");
    $(".close").toggleClass("block");
  });
});

//slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//slider

//swiper1

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1280: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//end swiper1

//swiper2

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 8,
  breakpoints: {
    1280: {
      slidesPerView: 5.1,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 4.1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 5.1,
      spaceBetween: 8,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//end swiper2

//swiper3$5&6

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1.4,
  spaceBetween: 5,
  centeredSlides: true,

  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      loop: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//end swiper3&5&6

//swiper4&7

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: "auto",
  spaceBetween: 10,

  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//end swiper4&7

//swiper8

var swiper = new Swiper(".mySwiper8", {
  slidesPerView: "auto",
  spaceBetween: 8,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* var swiper10 = new Swiper(".mySwiper10", {
  spaceBetween: 1,
  effect: "slide",
  loop: true,
  freeMode: false,
  slidesPerView: 7,
  speed: 10000,
  allowTouchMove: false,
  pauseOnMouseEnter: true,
  longSwipes: true,
  autoplay: {
    delay: 0,
    autoplayDisableOnInteraction: true,
    disableOnInteraction: false,
    waitForTransition: true,
    stopOnLastSlide: false,
  },
  
}); */

//best-brands
var scrollc = new Swiper(".mySwiper10", {
  spaceBetween: 0,
  breakpoints: {
    1280: {
      slidesPerView: 7,
      spaceBetween: 30,
      speed: 7000,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
      speed: 7000,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 5,
      speed: 7000,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 1,
      speed: 7000,
    },
  },
  effect: "slide",
  loop: true,
  freeMode: false,
  slidesPerView: 3,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
    pauseOnMouseEnter: true,

    delay: 0,
    autoplayDisableOnInteraction: true,
    disableOnInteraction: false,
    waitForTransition: true,
    stopOnLastSlide: false,
  },
});

//end best-brands

//accordion

//end accordion
