const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelectorAll('.bar');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');

  // Hamburger animation
  if (mobileMenu.classList.contains('show')) {
    bars[0].style.transform = "rotate(45deg) translate(6px, 6px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg) translate(6px, -7px)";
  } else {
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
});
