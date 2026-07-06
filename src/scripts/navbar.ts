const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  const updateNavbarBackground = () => {
    if (!navbar) return;
    if (isMenuOpen || window.scrollY > 50) {
      navbar.classList.remove('bg-black/50', 'backdrop-blur-md');
      navbar.classList.add('bg-navbar-bg');
    } else {
      navbar.classList.add('bg-black/50', 'backdrop-blur-md');
      navbar.classList.remove('bg-navbar-bg');
    }
  };

  window.addEventListener('scroll', updateNavbarBackground);

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      // Animacija za Hamburger "X" ikonicu
      mobileBtn.classList.toggle('open');
      
      // Glatka animacija otvaranja/zatvaranja menija
      if (isMenuOpen) {
        mobileMenu.classList.remove('opacity-0', 'invisible', '-translate-y-4');
        mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-4');
      }
      
      updateNavbarBackground();
    });
  }