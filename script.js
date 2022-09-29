// js menu mobile
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");

  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu, { passive: true });
btnMobile.addEventListener("touchstart", toggleMenu);

// fim js menu mobile

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }

    if (this.scrollY > 300) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  var typed = new Typed(".typing", {
    strings: ["DESENVOLVEDOR WEB"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Desenvolvedor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // $(".menu-btn").click(function () {
  //   $(".navbar .menu").toggleClass("active");
  //   $(".menu-btn i").toggleClass("active");
  // });
  // $('.carousel').owlCarousel({
  //     margin:20,
  //     loop:true,
  //     autoplayTimeOut:2000,
  //     autoplayHoverPauser:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             nav:false
  //         },
  //         600:{
  //             items:2,
  //             nav:false
  //         },
  //         1000:{
  //             items:3,
  //             nav:false
  //         }
  //     }
  // });
});

// ScrollReveal
// window.sr = ScrollReveal({ reset: true });
// ScrollReveal().reveal(".efectScroll", {
//   delay: 200,
//   rotate: {
//     x: 100,
//     y: 0,
//     z: 0,
//   },
// });

// filter portfolio
// $(document).ready(function () {
//     $(".portfolio-content-filter .item").click(function () {
//         $(this).addClass("active").siblings().removeClass("active");

//         $(".itens").fadeOut();
//         setTimeout(function () {
//             $(".itens").fadeIn();
//         }, 400);

//         let value = $(this).attr("data-filter");

//         setTimeout(function () {
//             if (value === "all") {
//                 $(".itens .item").show("500");
//             } else {
//                 $(".itens .item")
//                     .not("." + value)
//                     .hide("500");
//                 $(".itens .item")
//                     .filter("." + value)
//                     .show("500");
//             }
//         }, 100);
//     });
// });
