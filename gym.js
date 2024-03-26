

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20 
    }
    
  }
});



ScrollReveal({ reset: false });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".hero-content h1", {
    duration: 1000,
    scale: 4,
    easing: "ease",
    interval: 200
  });

  ScrollReveal().reveal(".hero-content h2", {
    duration: 1000,

    scale: -4,
    reset:false,
    easing: "ease",
  });
  

ScrollReveal().reveal(".main-pack", {
    duration: 1000,
    scale: 0.5,
    easing: "ease",
    interval: 200
  });
  
  ScrollReveal().reveal(".container1 > div", {
    duration: 1000,
    origin: "left",
    distance: "200px",
    easing: "ease-in-out",
    delay: 200,
    interval: 150,
    reset: false,
    scale:0.7,
  });
  
  ScrollReveal().reveal(".packages-info > p1", {
    duration: 1000,
    origin: "right",
    distance: "200px",
    scale:'1.03',
    easing: "ease-in-out",
    delay: 200
  });
  
  ScrollReveal().reveal(".trainers-info div", {
    duration: 1000,
    origin: "bottom",
    distance: "100px",
    easing: "ease-in-out",
    interval: 200
  });
  
  ScrollReveal().reveal(" .footer1", {
    duration: 1000,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
    delay: 200
  });
  
  ScrollReveal().reveal(" .main-footer1", {
    duration: 1000,
    origin: "left",
    distance: "200px",
    easing: "ease-in-out",
    delay: 200
  });
  
  ScrollReveal().reveal(" .main-footer2", {
    duration: 1000,
    origin: "right",
    distance: "200px",
    easing: "ease-in-out",
    delay: 200
  });

  ScrollReveal().reveal(" .container2 >div", {
    duration: 1000,
    origin: "right",
    distance: "200px",
    easing: "linear",
    delay: 200,
    opacity:1,
    scale:1.2,

  });
 
  


  
  
  
  