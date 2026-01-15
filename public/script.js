document.addEventListener('DOMContentLoaded', () => {

  // toggle icon navbar
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  }

  // scroll sections active link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        document
          .querySelector(`header nav a[href*="${id}"]`)
          ?.classList.add('active');
      }
    });

    const header = document.querySelector('header');
    header?.classList.toggle('sticky', window.scrollY > 100);

    menuIcon?.classList.remove('bx-x');
    navbar?.classList.remove('active');
  });

  // scroll reveal（ScrollReveal 是全域）
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }

  // ✅ typed js（重點）
  if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
      strings: ['Data Analyst', 'AI Explorer', 'R & Python Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }

  // image carousel
  const images = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.carousel .prev');
  const nextBtn = document.querySelector('.carousel .next');

  let index = 0;

  function showImage(i) {
    images.forEach(img => img.classList.remove('active'));
    images[i]?.classList.add('active');
  }

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

});
