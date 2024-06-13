// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  header.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    header.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
const zoomWrapper = document.getElementById("zoomWrapper");
if (zoomWrapper) {
  $(".easyzoom").easyZoom({
    loadingNotice: "Loading image",
    errorNotice: "The image could not be loaded",
    errorDuration: 2500,
    linkAttribute: "href",
    preventClicks: true,
    beforeShow: $.noop,
    beforeHide: $.noop,
    onShow: $.noop,
    onHide: $.noop,
    onMove: $.noop,
  });

  $(function () {
    $(".apartment__inner-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 600,
      fade: true,
    });
  });

  $(function () {
    $(".apartment__inner-swiper").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
      speed: 600,
      asNavFor: ".apartment__inner-slider",
      responsive: [
        {
          breakpoint: 541,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}
// tooltip
const facadesWrapper = document.getElementById("facadesWrapper");
if (facadesWrapper) {
  var tooltips = document.querySelectorAll(".infoItem__tip");
  window.onmousemove = function (e) {
    var x = e.clientX + 20 + "px",
      y = e.clientY + 20 + "px";
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y;
      tooltips[i].style.left = x;
    }
  };
}

const infoItems = document.querySelectorAll(".infoItem");
if (window.innerWidth <= 930) {
  infoItems.forEach((infoItem) => {
    infoItem.onclick = (e) => {
      const tip = infoItem.querySelector(".infoItem__tip");
      if (!tip.contains(e.target)) {
        if (infoItem.classList.contains("active")) {
          infoItem.classList.remove("active");
        } else {
          infoItem.classList.add("active");
        }
        if (tip.classList.contains("active")) {
          tip.classList.remove("active");
        } else {
          tip.classList.add("active");
        }
      }
      tip.onclick = (e) => {
        if (e.target === e.currentTarget) {
          infoItem.classList.remove("active");
          tip.classList.remove("active");
        }
      };
    };
  });
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 930) {
    infoItems.forEach((infoItem) => {
      infoItem.onclick = (e) => {
        const tip = infoItem.querySelector(".infoItem__tip");
        if (!tip.contains(e.target)) {
          if (infoItem.classList.contains("active")) {
            infoItem.classList.remove("active");
          } else {
            infoItem.classList.add("active");
          }
          if (tip.classList.contains("active")) {
            tip.classList.remove("active");
          } else {
            tip.classList.add("active");
          }
        }
        tip.onclick = (e) => {
          if (e.target === e.currentTarget) {
            infoItem.classList.remove("active");
            tip.classList.remove("active");
          }
        };
      };
    });
  }
});
