$(document).ready(function () {
  //page1
  $("img#hamber").click(function () {
    $("div.side-bar").removeClass(
      "animate__animated animate__fadeOutRight none"
    );

    $("div.payeh").addClass("block2 animate__animated animate__fadeIn");
    $("div.side-bar").addClass("block2 animate__animated animate__fadeInRight");
    $("html,body").css({
      overflow: "hidden",
    });
  });
  $("div#payeh").click(function () {
    $(this).removeClass("block2");
    $("div.side-bar").addClass("animate__animated animate__fadeOutRight none");
    $("html,body").css({
      overflow: "auto",
    });
  });
  $("div.asli").click(function () {
    $("div.zir").slideToggle(500);
    $("i.bandi").toggleClass("transform");
    $("p.bandi").toggleClass("redd");
  });
  $("div.one").click(function () {
    $("div.one>span").removeClass("transform");
    $("div.one>p").removeClass("redd");
    $(this).children("div.one>span").toggleClass("transform");
    $(this).children("p").toggleClass("redd");
  });
  $("div.one").on("click", function () {
    $("div.two").removeClass("block");
    $(this).next("div.two").slideToggle("block");
  });

  $("input").focus(function () {
    $("i.round").addClass("focus");
    $(this).addClass("tool");
  });
  $("input").blur(function () {
    $("i.round").removeClass("focus");
    $(this).removeClass("tool");
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
  //end page1

  //page2

  $("div.anasor").click(function () {
    $(this).find("div.tick").toggleClass("back-redd");
    var activeTick = document.querySelectorAll(".back-redd");
    console.log(activeTick);
    if (activeTick.length > 0) {
      $("div.alaki").show("slow");
    } else {
      $("div.alaki").hide(300);
    }
  });

  $("div.alaki").click(function () {
    $(this).hide(200);
    $("div.tick").removeClass("back-redd");
  });
  $("div.nahan").hide();
  $("div.ashkar").click(function () {
    $(this).next("div.nahan").slideToggle();
    $(this).children("i").toggleClass("transform");
  });
  $(".seen-low-page2").hide();
  $(".seen-more-page2").click(function () {
    $("div.na-peyda").addClass("block");
    $(this).hide();
    $(".seen-low-page2").show();
  });
  $(".seen-low-page2").click(function () {
    $(this).hide();
    $("div.na-peyda").removeClass("block");
    $(".seen-more-page2").show();
  });
  $("#dropdownDefaultButton").click(function () {
    $("#dropdown").slideToggle();
  });

  $("div.sor").click(function () {
    $("div.sortha").removeClass("animate__animated animate__slideOutDown");
    $("div.sort-mobile").fadeIn();
    $("div.sortha").addClass("animate__animated animate__slideInUp");
    $("html,body").css({
      overflow: "hidden",
    });
  });
  $("div.sort-mobile").click(function () {
    $("div.sortha").removeClass("animate__animated animate__slideInUp");
    $("div.sortha").addClass("animate__animated animate__slideOutDown");
    $(this).fadeOut();

    $("html,body").css({
      overflow: "auto",
    });
  });
  $("div.payeh-filters-mobile,div.filters-mobile").hide();
  $("div#filt").click(function () {
    $("div.payeh-filters-mobile").fadeIn();
    $("div.filters-mobile").removeClass(
      "block animate__animated animate__slideOutDown"
    );
    $("div.filters-mobile").addClass(
      "block animate__animated animate__slideInUp"
    );
    $("html,body").css({
      overflow: "hidden",
    });
  });
  $("i#second").hide();
  $("div.filter-items").click(function () {
    $("div.in-left").removeClass("none");
    $(this)
      .next("div.in-left")
      .addClass("block animate__animated animate__slideInRight");
    $("i#first").hide();
    $("i#second").show();
    $("div#remove").hide();
  });
  $("i#second").click(function () {
    $(this).hide();
    $("i#first").show();
    $("div.in-left").removeClass("block");
    $("div#remove").show();
  });
  $("div.rangss").hide();
  $("div.filter-items-btm").click(function () {
    $(this).children("div.rangss").slideToggle();
    $(this).children("div").children("i").toggleClass("rotate");
  });
  $("i#first").click(function () {
    $("div.payeh-filters-mobile").fadeOut();
    $("div.filters-mobile").addClass("animate__animated animate__slideOutDown");
    $("html,body").css({
      overflow: "auto",
    });
  });
  $("div.payeh-filters-mobile").click(function () {
    $(this).fadeOut();
    $("div.filters-mobile").removeClass("block");
    $("div.filters-mobile").addClass(
      "block animate__animated animate__slideOutDown"
    );
    $("html,body").css({
      overflow: "auto",
    });
  });
  $("div.in-left-brands").click(function () {
    $(this).children("div.rasti").children("div.tick").toggleClass("back-redd");
  });
  $("p#selected").click(function () {
    $("p#selected").removeClass("selected2");
    $(this).addClass("selected2");
  });
  $("a#selected").click(function () {
    $("a#selected").removeClass("selected2");
    $(this).addClass("selected2");
    var anchorText = $(this).text();
    $("#dropdownDefaultButton").html(anchorText);
  });
  $("a#nav-num").click(function () {
    $("a#nav-num").removeClass("nav-color");
    $(this).addClass("nav-color");
  });
  $("#x-mark").click(function () {
    $("section.gallery-hide").hide();
    $("html,body").css({
      overflow: "auto",
    });
  });
  $(".gallery-hide")
    .click(function () {
      $(this).hide();

      $("html,body").css({
        overflow: "auto",
      });
    })
    .children()
    .click(function () {
      return false;
    });
  let axGallery = document.getElementById("ax-gallery");
  var galleryHide = document.querySelectorAll(".gallery-hide-pics img");
  galleryHide.forEach(function (elem) {
    elem.addEventListener("click", function () {
      axGallery.src = elem.src;
    });
  });
  $(".click-gallery").click(function () {
    $(".gallery-hide").show();
    $("html,body").css({
      overflow: "hidden",
    });
  });
  $("div.clr-item").click(function () {
    $("div.bord").removeClass("borderr");
    $(this).parent("div.bord").addClass("borderr");
    let dddd = $(this).next("p").text();
    console.log(dddd);
    $("p#rng-name").text(dddd);
  });
  let cnt = 1;
  let recycle = document.getElementById("recycle");
  let minese = document.getElementById("minese");

  $("img#plus").click(function () {
    cnt += 1;
    $("p#counter").text(cnt);
    if (cnt > 1) {
      $(minese).show();
      $(recycle).hide();
    }
    if (cnt >= 7) {
      cnt = 7;
    }
  });
  $("img#minese").click(function () {
    cnt--;
    $("p#counter").text(cnt);
    if (cnt == 1) {
      $(minese).hide();
      $(recycle).show();
    }
  });
  $("div.plus-minese").hide();
  $("div.sabad-kharid").click(function () {
    $("div.plus-minese").show();
    $("#changeText").text("مشاهده سبد خرید");
  });
  $("img#recycle").click(function () {
    $("div.plus-minese").hide();
    $("#changeText").text("افزودن سبد خرید");
  });

  setTimeout(() => {
    $(".afz,div.dayere-part2").show();
    $(".afz-part2").removeClass("end");
  }, 5000);

  $(".afz-part2").hide();
  $(".afz").click(function () {
    $(this).children("p").text("مشاهده سبد خرید");
    $(".afz-part2").show();
  });

  $("div.dayere-part2").click(function () {
    $("div.afz").hide();
    $(this).hide();
    $(".afz-part2").addClass("end");
    setTimeout(() => {
      $(".afz,div.dayere-part2").show();
      $(".afz-part2").removeClass("end");
    }, 5000);
  });

  $("i#plus2").click(function () {
    cnt++;
    $("p#counter2").text(cnt);
    if (cnt > 1) {
      $("#minese2").show();
      $("#recycle2").hide();
    }
    if (cnt >= 7) {
      cnt = 7;
    }
    $("div.dayere-part2").text(cnt);
  });
  $("img#minese2").click(function () {
    cnt--;
    $("p#counter2").text(cnt);
    if (cnt == 1) {
      $("#minese2").hide();
      $("#recycle2").show();
    }
    $("div.dayere-part2").text(cnt);
  });
  $("#recycle2").click(function () {
    $(".afz-part2").hide();
    $("div.afz").show();
    $("div.dayere-part2").show();
    $(".afz-part2").removeClass("end");
    $(".afz").children("p").text("افزودن به سبد خرید");
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
      slidesPerView: 5.7,
      spaceBetween: 0,
    },

    640: {
      slidesPerView: 4.5,
      spaceBetween: 0,
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

//page3 swiper gallery

var swiper30 = new Swiper(".mySwiper30", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
});
var swiper40 = new Swiper(".mySwiper40", {
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper30,
  },
});
