//   Swiper Slide2
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// tab JS
var jsTriggers = document.querySelectorAll(".js-tab-trigger");

jsTriggers.forEach(function (item, i) {
  item.addEventListener("click", function () {
    var tabName = this.dataset.tab,
      tabContent = document.querySelector(
        '.js-tab-content[data-tab="' + tabName + '"]'
      );

    document
      .querySelectorAll(".js-tab-content.active")
      .forEach(function (item, i) {
        item.classList.remove("active");
      });

    document
      .querySelectorAll(".js-tab-trigger.active")
      .forEach(function (item, i) {
        item.classList.remove("active");
      });

    tabContent.classList.add("active");
    this.classList.add("active");
  });
});

// Aos
AOS.init({
  duration: 800,
});
