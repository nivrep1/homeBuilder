var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  loop: true,
  // slide control
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //  pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  //  slide Effect
  fadeEffect: {
    crossFade: true,
  },
  speed: 1800,
  effect: "fade",
});

//   Swiper Slide2
var swiper2 = new Swiper(".mySwiper2", {
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

// Aos
AOS.init({
  duration: 800,
});

// Active click
// const links = document.querySelectorAll(".nav-item");
// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       links.forEach((link) => {
//         link.classList.remove("active");
//       });
//       e.preventDefault();
//       link.classList.add("active");
//       console.log("active ===> ", link.href);
//       // debugger;
//       link.firstChild.click();
//       // document.querySelector(link.children).click();
//     });
//   });
// }

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

// Play button
$("#play-video").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay").addClass("open");
  $("#video-overlay").append(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}

// Counter Up
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 400,
  });
});

//Burger Menu

const menu = document.querySelector(".header-burger");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector(".header-bottom");

const lastHeight = nav.style.height; //80
const lastNavList = navList.style.display;

menu.addEventListener("click", () => {
  nav.style.height =
    lastHeight == nav.style.height || "83px" == nav.style.height ? "auto" : "";
  navList.style.display =
    lastNavList == navList.style.display || "none" == navList.style.display
      ? "block"
      : "none";

  console.log(nav.style.height);
  console.log(navList.style.display);
});

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleTabletChange(e) {
  if (e.matches) {
    navList.style.display = "flex";
    nav.style.height = "83px";
  } else {
    navList.style.display = "none";
  }
}

mediaQuery.addEventListener(handleTabletChange);
