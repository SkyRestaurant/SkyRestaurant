document.addEventListener('DOMContentLoaded', () => {
  
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    document.body.appendChild(lightbox);
  }

  // @ts-ignore
  const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#slider-next',
      prevEl: '#slider-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
    }
  });

  const swiperContainer = document.querySelector('.gallery-swiper');
  const lbImg = document.getElementById('lb-img') as HTMLImageElement;
  const btnClose = document.getElementById('lb-close');
  const btnPrev = document.getElementById('lb-prev');
  const btnNext = document.getElementById('lb-next');
  
  if (!lightbox || !lbImg || !swiperContainer) return;

  const imageUrls = JSON.parse(swiperContainer.getAttribute('data-images') || '[]');
  let currentIndex = 0;
  
  // Zastavica koja sprečava Ghost Click na mobilnom
  let ignoreClose = false;

  const openLightbox = (index: number) => {
    currentIndex = index;
    lbImg.src = imageUrls[currentIndex];
    
    // Blokiramo skrol (nema podskakivanja jer smo sakrili scrollbar u global.css)
    document.body.style.overflow = 'hidden';

    // Aktivacija zastavice protiv duplog klika na telefonu
    ignoreClose = true;
    setTimeout(() => { ignoreClose = false; }, 150);

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
  };

  const closeLightbox = () => {
    if (ignoreClose) return; // Ako je Ghost Click u toku, ignoriši

    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lbImg.src = '';
      document.body.style.overflow = ''; 
    }, 300);
  };

  const showNext = (e?: Event) => {
    if(e) e.stopPropagation();
    currentIndex = (currentIndex + 1) % imageUrls.length;
    lbImg.src = imageUrls[currentIndex];
  };

  const showPrev = (e?: Event) => {
    if(e) e.stopPropagation();
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    lbImg.src = imageUrls[currentIndex];
  };

  // SWIPER KLIK
  swiper.on('click', (s: any) => {
    if (s.clickedSlide) {
      const realIndex = parseInt(s.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      if (!isNaN(realIndex)) {
        openLightbox(realIndex);
      }
    }
  });

  // LIGHTBOX KONTROLE
  if (btnClose) btnClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
  if (btnNext) btnNext.addEventListener('click', showNext);
  if (btnPrev) btnPrev.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    // Gašenje samo ako se klikne na crnu pozadinu (a ne na strelice ili sliku)
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // TASTATURA (Desktop)
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // --- MOBILNI SWIPE GESTURES ZA LIGHTBOX ---
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50; // Minimalna razdaljina za swipe

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;

    // Ako je swipe levo
    if (swipeDistance < -swipeThreshold) {
      showNext();
    }
    // Ako je swipe desno
    if (swipeDistance > swipeThreshold) {
      showPrev();
    }
  }, { passive: true });
});