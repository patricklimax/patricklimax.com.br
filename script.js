
// js menu mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');

  nav.classList.toggle('active');

  const active = nav.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);
  
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// fim js menu mobile



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor Web"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Desenvolvedor"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});


window.sr = ScrollReveal({ reset: true });

sr.reveal('.efectAbout', {
    rotate: {x:100, y:100, z:100},
    duration:2000
});

sr.reveal('.servEfect', { 
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.benefEfect', {
    rotate: {x:100, y:0, z:0},
    duration:2000
});

sr.reveal('.efectPort', {
    rotate: {x:100, y:0, z:0},
    duration:2000
});

sr.reveal('.efectPort01', {
    rotate: {x:0, y:180, z:0},
    duration:2000
});

sr.reveal('.efectPort02', {
    rotate: {x:180, y:0, z:0},
    duration:2000
});

sr.reveal('.efectPort03', {
    rotate: {x:0, y:-180, z:0},
    duration:2000
});

sr.reveal('.efectLogo', {
    rotate: {x:0, y:-180, z:0},
    duration:1000
});





