const toggleBtn = document.getElementById('toggle-gallery-btn') as HTMLButtonElement | null;
  const items = document.querySelectorAll('.gallery-item');
  const gallerySection = document.getElementById('gallery') as HTMLElement | null;
  
  const lightbox = document.getElementById('lightbox') as HTMLDivElement | null;
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const btnClose = document.getElementById('lightbox-close') as HTMLButtonElement | null;
  const btnNext = document.getElementById('lightbox-next') as HTMLButtonElement | null;
  const btnPrev = document.getElementById('lightbox-prev') as HTMLButtonElement | null;

  let isExpanded = false;
  let currentIndex = 0;
  
  // Skupljamo sve source-ve
  const imageUrls = Array.from(items).map(item => item.getAttribute('data-src') || '');

  // LOGIKA ZA SHOW MORE
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      
      items.forEach((item, index) => {
        if (index >= 8) {
          if (isExpanded) {
            item.classList.remove('hidden');
            item.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'forwards' });
          } else {
            item.classList.add('hidden');
          }
        }
      });

      const showMoreText = toggleBtn.getAttribute('data-show-more') || '';
      const showLessText = toggleBtn.getAttribute('data-show-less') || '';
      toggleBtn.textContent = isExpanded ? showLessText : showMoreText;
        
      if (!isExpanded && gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // LOGIKA ZA LIGHTBOX
  const openLightbox = (index: number) => {
    if (!lightbox || !lightboxImg) return;
    
    currentIndex = index;
    lightboxImg.src = imageUrls[currentIndex];
    lightbox.classList.remove('hidden');
    
    setTimeout(() => {
      lightbox.classList.remove('opacity-0');
      lightboxImg.classList.remove('scale-95');
      lightboxImg.classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.add('opacity-0');
    lightboxImg.classList.remove('scale-100');
    lightboxImg.classList.add('scale-95');
    
    setTimeout(() => {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateLightboxImage();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateLightboxImage();
  };

  const updateLightboxImage = () => {
    if (!lightboxImg) return;
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = imageUrls[currentIndex];
      lightboxImg.style.opacity = '1';
    }, 150);
  };

  // Event Listeneri
  items.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  btnClose?.addEventListener('click', closeLightbox);
  btnNext?.addEventListener('click', showNext);
  btnPrev?.addEventListener('click', showPrev);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightbox.firstElementChild) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('#gallery .animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });