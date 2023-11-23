document.addEventListener('DOMContentLoaded', function () {
  var mobilemenu = document.getElementById('mobile-menu-main');
  var sticky = 30; // 50 pixels from the top
  var isSticky = false;

  window.onscroll = function () {
    if (window.pageYOffset > sticky && !isSticky) {
      setTimeout(function () {
        mobilemenu.classList.add('sticky');

        isSticky = true;
      }, 50); // Adjust the delay (in milliseconds) as needed
    } else if (window.pageYOffset <= sticky && isSticky) {
      mobilemenu.classList.remove('sticky');
      isSticky = false;
    }
  };
});

$('.hamburger-icon').click(function () {
  $('.mobile-menu-link').toggleClass('show');
  //   $('.mobile-menu-link').toggleClass('d-none');
});
$('.hamburger-icon').click(function () {
  $(this).toggleClass('sidebaractive');
});

// AOS animation initialized
AOS.init();

// agendi page contact form

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// caregiver testimonial slider js start from here

var swiper = new Swiper('.testimonial-slider', {
  loop: 'true',
  spaceBetween: 30,
  speed: 500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Pause autoplay on hover
$('.testimonial-slider').hover(
  function () {
    swiper.autoplay.stop();
  },
  function () {
    swiper.autoplay.start();
  }
);
// caregiver testimonial slider end here
