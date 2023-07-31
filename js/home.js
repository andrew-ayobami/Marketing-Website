// SCROLL ANIMATION

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Calculate the position where the element should start appearing (half of the element's height)
  var appearancePosition = windowHeight - (element.clientHeight / 2.8);

  // Check if the element's top position is less than or equal to the appearancePosition
  return rect.top <= appearancePosition;
}

function animateScrollElements() {
  var scrollAnimations = document.querySelectorAll('.scroll-animation');
  for (var i = 0; i < scrollAnimations.length; i++) {
    var element = scrollAnimations[i];
    if (isElementInViewport(element)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show'); // Reset the animation state when element is not in viewport
    }
  }
}

window.addEventListener('scroll', animateScrollElements);

// Call animateScrollElements once on page load to handle initial state
animateScrollElements();


// NAVIGATION BAR SLIDER
      
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-bar');
  const navLinks = document.querySelectorAll('.header-bar .nav-list');

  burger.addEventListener('click', () => {
    // Toggle
    nav.classList.toggle('openNav');
    // Links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });
}

navSlide();


// TESTIMONIALS CAROUSEL SWIPER EFFECT

let swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".container2 .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".container2 .swiper-button-next",
    prevEl: ".container2 .swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

// BRAND LOGOS CAROUSEL EFFECT

let imgSwiper = new Swiper(".slide-img-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  centerSlide: 'false',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".container1 .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".container1 .swiper-button-next",
    prevEl: ".container1 .swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    520: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

// BACK TO TOP BUTTON

window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

document.getElementById('back-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// FORM SUBMISSION SMTP
const sendEmail = () => {
  const form = document.querySelector('.newsletter');
  const response = 'Thank you for signing up!';

  form.innerHTML = response
} 


