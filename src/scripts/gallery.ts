document.addEventListener('DOMContentLoaded', () => {
  
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    document.body.appendChild(lightbox);
  }

  const swiperContainer = document.querySelector('.gallery-swiper');
  const lbImg = document.getElementById('lb-img') as HTMLImageElement;
  const btnClose = document.getElementById('lb-close');
  const btnPrev = document.getElementById('lb-prev');
  const btnNext = document.getElementById('lb-next');
  
  if (!lightbox || !lbImg || !swiperContainer) return;

  const imageUrls = JSON.parse(swiperContainer.getAttribute('data-images') || '[]');
  
  // @ts-ignore
  const swiper = new Swiper('.gallery-swiper', {
    loop: false, 
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false, 
    slidesOffsetBefore: 16, // Mobilni default levo
    slidesOffsetAfter: 16,  // Mobilni default desno
    grabCursor: true,
    
    // Blokira slučajne klikove dok se skrola
    preventClicks: true,
    preventClicksPropagation: true,

    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#slider-next',
      prevEl: '#slider-prev',
    },
    
    // NOVE DIMENZIJE ZA TABLET I DESKTOP
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesOffsetBefore: 100, // Tablet 100px
        slidesOffsetAfter: 100,
      },
      1024: {
        spaceBetween: 32,
        slidesOffsetBefore: 200, // Desktop 200px
        slidesOffsetAfter: 200,
      }
    }
  });

  let currentIndex = 0;
  let isLightboxOpen = false;
  
  // Zastavica koja ubija "Ghost Click" bag na mobilnim telefonima
  let ignoreClose = false;

  const updateLightboxArrows = () => {
    if (currentIndex <= 0) {
      btnPrev?.classList.add('opacity-0', 'pointer-events-none');
    } else {
      btnPrev?.classList.remove('opacity-0', 'pointer-events-none');
    }

    if (currentIndex >= imageUrls.length - 1) {
      btnNext?.classList.add('opacity-0', 'pointer-events-none');
    } else {
      btnNext?.classList.remove('opacity-0', 'pointer-events-none');
    }
  };

  const openLightbox = (index: number) => {
    if (isLightboxOpen) return;
    isLightboxOpen = true;
    currentIndex = index;
    lbImg.src = imageUrls[currentIndex];
    
    updateLightboxArrows(); 
    
    // Čist overflow
    document.body.style.overflow = 'hidden'; 

    // OVO SPREČAVA DA SE SLIKA INSTANT UGAS/PODSKOČI NA MOBILNOM (400ms blokada)
    ignoreClose = true;
    setTimeout(() => { ignoreClose = false; }, 400);

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lightbox.classList.remove('opacity-0');
      });
    });
  };

  const closeLightbox = () => {
    if (ignoreClose || !isLightboxOpen) return;
    lightbox.classList.add('opacity-0');
    
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lbImg.src = '';
      
      document.body.style.overflow = '';
      isLightboxOpen = false;
    }, 300);
  };

  const showNext = (e?: Event) => {
    if(e) { e.preventDefault(); e.stopPropagation(); }
    if (currentIndex >= imageUrls.length - 1) return; 
    currentIndex++;
    lbImg.src = imageUrls[currentIndex];
    updateLightboxArrows();
  };

  const showPrev = (e?: Event) => {
    if(e) { e.preventDefault(); e.stopPropagation(); }
    if (currentIndex <= 0) return; 
    currentIndex--;
    lbImg.src = imageUrls[currentIndex];
    updateLightboxArrows();
  };

  swiper.on('click', (s: any, e: Event) => {
    if (e) { e.preventDefault(); } // Ubija defaultno ponašanje browsera (skakanje)
    const clickedElement = (e.target as HTMLElement).closest('.gallery-img-wrapper');
    if (clickedElement) {
      const exactIndex = parseInt(clickedElement.getAttribute('data-index') || '0', 10);
      if (!isNaN(exactIndex)) {
        openLightbox(exactIndex);
      }
    }
  });

  if (btnClose) btnClose.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); closeLightbox(); });
  if (btnNext) btnNext.addEventListener('click', showNext);
  if (btnPrev) btnPrev.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lbImg.parentElement) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!isLightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50; 

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (!isLightboxOpen) return;
    
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance < -swipeThreshold) {
      showNext();
    }
    if (swipeDistance > swipeThreshold) {
      showPrev();
    }
  }, { passive: true });
});