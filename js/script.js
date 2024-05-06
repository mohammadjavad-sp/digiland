$(document).ready(function () {
  //page1

  alert("برای دیدن صفحه دوم : دسته بندی کالاها > گوشی موبایل > سامسونگ و سپس برای دیدن صفحه سوم روی گوشی s23 ultra کلیک کنید");

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
      overflow: "unset",
    });
  });
  $("div.asli").click(function () {
    $("div.zir").slideToggle(500);
    $("i.bandi").toggleClass("transform");
    $("p.bandi").toggleClass("redd");
  });
  $("div.one>span").click(function () {
    $(this).toggleClass("transform");
    $(this).prev("a").toggleClass("redd");
    $(this).parent("div.one").next("div.two").slideToggle();
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
    $("div#bg").addClass("block");
  });
  $("li#li").mouseleave(function () {
    $("div#bg").removeClass("block");
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
  $("#prev").click(function () {
    let navNum = $(".nav-color");
    $(navNum)
      .removeClass("nav-color")
      .parent("li")
      .prev("li")
      .children("a")
      .addClass("nav-color");
  });

  $("#next").click(function () {
    let navColor = $(".nav-color");
    $(navColor)
      .removeClass("nav-color")
      .parent("li")
      .next("li")
      .children("a")
      .addClass("nav-color");
  });

  //page3

  $("#x-mark").click(function () {
    $("section.gallery-hide").hide();
    $("html,body").css({
      overflow: "unset",
    });
  });
  $(".gallery-hide")
    .click(function () {
      $(this).hide();

      $("html,body").css({
        overflow: "unset",
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
  var price = 50.999;
  let cnt2 = 1;
  function newPrice() {
    return (price * cnt2).toFixed(3);
  }

  function timeOut() {
    myTime = setTimeout(() => {
      $("div.plus-mineseee").hide();
    }, 5000);
    myTime2 = setTimeout(() => {
      $("div.seen-sabad").show();
    }, 5000);
  }
  function StopTimeOut() {
    clearTimeout(myTime);
    clearTimeout(myTime2);
  }

  $(".seen-tedad-price").hide();
  $("div.delAfterClick").click(function () {
    $(this).hide();
    $(".seen-tedad-price").show();
  });
  $("div.plus-mineseee").hide();
  $("div.dayere-tedad").click(function () {
    $("p#counter2").text(cnt2);
    $("div.seen-sabad").hide();
    $("div.plus-mineseee").show();
    timeOut();
  });
  $("i#plus2").click(function () {
    StopTimeOut();
    setTimeout(timeOut);
    if (cnt2 > 8) {
      cnt2 = 8;
    }
    cnt2++;
    $("p#counter2").text(cnt2);
    if (cnt2 > 1) {
      $("#recycle2").hide();
      $("#minese2").show();
    }
    $("div.dayere-tedad").text(cnt2);
    $("p.finalPrice").text(newPrice() + ".000" + " تومان");
  });
  $("img#minese2").click(function () {
    StopTimeOut();
    setTimeout(timeOut);
    cnt2--;
    $("p#counter2").text(cnt2);
    if (cnt2 == 1) {
      $("#minese2").hide();
      $("#recycle2").show();
    }
    $("div.dayere-tedad").text(cnt2);
    $("p.finalPrice").text(newPrice() + ".000" + " تومان");
  });
  $("#recycle2").click(function () {
    $(".seen-tedad-price").hide();
    $("div.delAfterClick").show();
  });
  $(".s23-txt-hide").hide();
  $(".seen-more-s23").click(function () {
    $(this).hide();
    $("p.first-txt").css({
      lineClamp: "unset",
    });
    $(".s23-txt-hide").show();
  });
  $(".s23-seen-low").click(function () {
    $(".s23-txt-hide").hide();
    $("p.first-txt").css({
      lineClamp: "3",
    });
    $(".seen-more-s23").show();
  });
  $(".moshakhasat-hide").hide();
  $(".moshakhasat-seen-more").click(function () {
    $(this).hide();
    $(".moshakhasat-hide").show();
  });
  $(".moshakhasat-seen-low").click(function () {
    $(".moshakhasat-hide").hide();
    $(".moshakhasat-seen-more").show();
  });

  $(document).scroll(function () {
    var st = $(this).scrollTop();
    if (
      st >= $(".moshakhasat-fani").offset().top - 100 &&
      st <= $(".comments-users").offset().top
    ) {
      $(".menu-moarefi>div:nth-of-type(1)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(3)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(2)>p").addClass("moarefi-color");
    } else if (
      st >= $(".comments-users").offset().top - 100 &&
      st <= $(".question-answer").offset().top
    ) {
      $(".menu-moarefi>div:nth-of-type(2)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(1)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(4)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(3)>p").addClass("moarefi-color");
    } else if (st >= $(".question-answer").offset().top - 100) {
      $(".menu-moarefi>div:nth-of-type(2)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(1)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(3)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(4)>p").addClass("moarefi-color");
    } else {
      $(".menu-moarefi>div:nth-of-type(2)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(4)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(3)>p").removeClass("moarefi-color");
      $(".menu-moarefi>div:nth-of-type(1)>p").addClass("moarefi-color");
    }
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
