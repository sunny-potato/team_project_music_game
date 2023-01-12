// get the intial slide
let initial_slide =
  new URLSearchParams(window.location.search).get("activeIndex") || "0";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 100,
  speed: 700,

  //first page
  initialSlide: initial_slide,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Effect of slider
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    depth: 500,
    slidesShadows: false,
  },
});

swiper.on("activeIndexChange", (data) => {
  let new_url = "?activeIndex=" + data.activeIndex;
  window.history.replaceState(null, "", new_url);
});
