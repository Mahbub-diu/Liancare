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
