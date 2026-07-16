const navbar = document.getElementById('navbar');
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

const updateNavbarBackground = () => {
  if (!navbar) return;
  if (isMenuOpen || window.scrollY > 50) {
    navbar.classList.remove('bg-black/70', 'backdrop-blur-md');
    navbar.classList.add('bg-navbar-bg');
  } else {
    navbar.classList.add('bg-black/70', 'backdrop-blur-md');
    navbar.classList.remove('bg-navbar-bg');
  }
};

const closeMobileMenu = () => {
  isMenuOpen = false;
  mobileBtn?.classList.remove('open');
  mobileMenu?.classList.remove('opacity-100', 'visible', 'translate-y-0');
  mobileMenu?.classList.add('opacity-0', 'invisible', '-translate-y-4');
};

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    mobileBtn.classList.toggle('open');

    if (isMenuOpen) {
      mobileMenu.classList.remove('opacity-0', 'invisible', '-translate-y-4');
      mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
      mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
      mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-4');
    }
    
    updateNavbarBackground();
  });

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      
      if (isMenuOpen) {
        closeMobileMenu();
      }
    });
  });
}
