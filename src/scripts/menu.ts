document.addEventListener('DOMContentLoaded', () => {
  // 1. Selektovanje elemenata
  const mainTabs = document.querySelectorAll<HTMLButtonElement>('.main-tab');
  const mainSections = document.querySelectorAll<HTMLElement>('.main-section');
  const subTabs = document.querySelectorAll<HTMLButtonElement>('.sub-tab');
  const sliders = document.querySelectorAll<HTMLElement>('.slider-container');
  const leftBtns = document.querySelectorAll<HTMLButtonElement>('.scroll-left');
  const rightBtns = document.querySelectorAll<HTMLButtonElement>('.scroll-right');

  // 2. Skrol logika (Strelica Levo / Desno)
  leftBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (sliders[idx]) {
        sliders[idx].scrollBy({ left: -200, behavior: 'smooth' });
      }
    });
  });

  rightBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (sliders[idx]) {
        sliders[idx].scrollBy({ left: 200, behavior: 'smooth' });
      }
    });
  });

  // 3. Logika glavnih tabova (Hrana / Pijalozi)
  mainTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetMain = tab.getAttribute('data-main-cat');
      if (!targetMain) return;

      // Resetuj sve glavne tabove
      mainTabs.forEach(t => {
        t.classList.remove('border-darkbrown', 'opacity-100');
        t.classList.add('border-transparent', 'opacity-60');
        
        const text = t.querySelector('span');
        if (text) {
          text.classList.remove('text-darkbrown', 'font-semibold');
          text.classList.add('text-dark');
        }

        const img = t.querySelector('img');
        if (img) {
          img.classList.remove('grayscale-0');
          img.classList.add('grayscale');
        }
      });

      // Setuj aktivni glavni tab
      tab.classList.remove('border-transparent', 'opacity-60');
      tab.classList.add('border-darkbrown', 'opacity-100');
      
      const activeText = tab.querySelector('span');
      if (activeText) {
        activeText.classList.remove('text-dark');
        activeText.classList.add('text-darkbrown', 'font-semibold');
      }

      const activeImg = tab.querySelector('img');
      if (activeImg) {
        activeImg.classList.remove('grayscale');
        activeImg.classList.add('grayscale-0');
      }

      // Prikazivanje odgovarajuce sekcije
      mainSections.forEach(sec => {
        if (sec.id === `section-${targetMain}`) {
          sec.classList.remove('hidden');
          // Automatski klikni prvi pod-tab u novoj sekciji
          const firstSubTab = sec.querySelector<HTMLButtonElement>('.sub-tab');
          if (firstSubTab) firstSubTab.click();
        } else {
          sec.classList.add('hidden');
        }
      });
    });
  });

  // 4. Logika pod-tabova (Kategorije)
  subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parentId = tab.getAttribute('data-parent');
      const subId = tab.getAttribute('data-sub-cat');
      if (!parentId || !subId) return;

      const parentSection = document.getElementById(`section-${parentId}`);
      if (!parentSection) return;

      // Resetuj sve pod-tabove u trenutnoj sekciji
      parentSection.querySelectorAll('.sub-tab').forEach(t => {
        t.classList.remove('bg-darkbrown', 'text-white', 'font-medium', 'shadow-md');
        t.classList.add('bg-white', 'text-dark/70', 'border', 'border-dark/10');
      });
      
      // Setuj aktivni pod-tab
      tab.classList.remove('bg-white', 'text-dark/70', 'border', 'border-dark/10');
      tab.classList.add('bg-darkbrown', 'text-white', 'font-medium', 'shadow-md');

      // Prikazivanje odgovarajuceg grida proizvoda
      parentSection.querySelectorAll('.product-grid').forEach(grid => {
        if (grid.id === `grid-${parentId}-${subId}`) {
          grid.classList.remove('hidden');
          setTimeout(() => grid.classList.remove('opacity-0'), 50); // Timeout za smooth fade-in
        } else {
          grid.classList.add('hidden', 'opacity-0');
        }
      });
    });
  });
});