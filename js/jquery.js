$(document).ready(function () {
  $("img#hamber").click(function () {
    $("div#side").addClass("active");
  });
  $("div#shadow").mouseenter(function () {
    $("img#pic").removeClass("return");
    $("img#pic").addClass("top");
  });
  $("div#shadow").mouseleave(function () {
    $("img#pic").removeClass("top");
    $("img#pic").addClass("return");
  });
  $("div#shadow").mouseenter(function () {
    $("img#corel")
      .removeClass("animate__animated animate__zoomOut")
      .fadeOut(300);
    $("img#corel")
      .addClass("animate__animated animate__zoomIn block")
      .fadeIn(300);
  });
  $("div#shadow").mouseleave(function () {
    $("img#corel")
      .removeClass("animate__animated animate__zoomIn block")
      .fadeOut(500);
    $("img#corel")
      .addClass("animate__animated animate__zoomOut block")
      .fadeIn(500);
  });
  $("input#input").focus(function () {
    $("img#search").removeClass("rotateOut");
    $("img#search").addClass("rotateIn");
    $("div#width").addClass("width");
  });
  $(document).click(function(){
    $("img#search").removeClass("rotateIn");
   

  })
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
  slidesPerView: 5.1,
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
      slidesPerView: 5,
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
