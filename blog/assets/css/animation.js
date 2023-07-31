
// window.addEventListener('scroll', function() {
//     var scrollAnimations = document.querySelectorAll('.scroll-animation');
//     for (var i = 0; i < scrollAnimations.length; i++) {
//       var element = scrollAnimations[i];
//       if (isElementInViewport(element)) {
//         element.classList.add('show');
//       }
//     }
//   });
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate the position where the element should start appearing (half of the element's height)
    var appearancePosition = windowHeight - (element.clientHeight / 3);
  
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
  
  