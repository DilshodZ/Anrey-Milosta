document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.remove('bg-dark');
    } else {
      navbar.classList.add('bg-dark');
      navbar.classList.remove('bg-dark');
    }
  });