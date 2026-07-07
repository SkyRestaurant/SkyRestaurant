document.addEventListener('DOMContentLoaded', () => {
  // 1. Skrol Strelice
  const leftBtns = document.querySelectorAll<HTMLButtonElement>('.scroll-left');
  const rightBtns = document.querySelectorAll<HTMLButtonElement>('.scroll-right');

  leftBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Gadja slider kontejner koji je pored strelice
      const container = btn.nextElementSibling as HTMLElement;
      if (container) container.scrollBy({ left: -250, behavior: 'smooth' });
    });
  });

  rightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.previousElementSibling as HTMLElement;
      if (container) container.scrollBy({ left: 250, behavior: 'smooth' });
    });
  });

  // 2. Glavni Tabovi (Hrana / Piće)
  const mainTabs = document.querySelectorAll<HTMLButtonElement>('.main-tab');
  const mainSections = document.querySelectorAll<HTMLElement>('.main-section');

  mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetKey = tab.getAttribute('data-main-cat');
      if (!targetKey) return;

      mainTabs.forEach(t => {
        t.classList.remove('border-darkbrown', 'opacity-100', 'is-active');
        t.classList.add('border-transparent', 'opacity-50', 'hover:opacity-100', 'hover:border-darkbrown/40');
        
        const img = t.querySelector('.tab-icon');
        if (img) {
          img.classList.remove('grayscale-0');
          img.classList.add('grayscale');
        }

        const text = t.querySelector('.tab-text');
        if (text) {
          text.classList.remove('text-darkbrown', 'font-bold');
          text.classList.add('text-dark/70');
        }
      });

      tab.classList.remove('border-transparent', 'opacity-50', 'hover:opacity-100', 'hover:border-darkbrown/40');
      tab.classList.add('border-darkbrown', 'opacity-100', 'is-active');
      
      const activeImg = tab.querySelector('.tab-icon');
      if (activeImg) {
        activeImg.classList.remove('grayscale');
        activeImg.classList.add('grayscale-0');
      }

      const activeText = tab.querySelector('.tab-text');
      if (activeText) {
        activeText.classList.remove('text-dark/70');
        activeText.classList.add('text-darkbrown', 'font-bold');
      }

      mainSections.forEach(sec => {
        if (sec.id === `section-${targetKey}`) {
          sec.classList.remove('hidden');
          sec.classList.add('block');
          
          const slider = sec.querySelector('.slider-container');
          if (slider) slider.scrollLeft = 0;
          
          const firstSubTab = sec.querySelector<HTMLButtonElement>('.sub-tab');
          if (firstSubTab) firstSubTab.click();
        } else {
          sec.classList.remove('block');
          sec.classList.add('hidden');
        }
      });
    });
  });

  // 3. Pod-tabovi (Salati, Pice, itd. sa novim PREMIUM GRADIENT klasama)
  const subTabs = document.querySelectorAll<HTMLButtonElement>('.sub-tab');
  const productGrids = document.querySelectorAll<HTMLElement>('.product-grid');

  subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parentKey = tab.getAttribute('data-parent');
      const subKey = tab.getAttribute('data-sub-cat');
      if (!parentKey || !subKey) return;

      const siblingTabs = document.querySelectorAll(`.sub-tab[data-parent="${parentKey}"]`);
      
      // Resetuj inaktivno stanje (skidamo gradient i senku)
      siblingTabs.forEach(t => {
        t.classList.remove('bg-gradient-to-tr', 'from-darkbrown', 'to-accent-gold', 'text-white', 'font-medium', 'shadow-md', 'is-active');
        t.classList.add('bg-transparent', 'text-dark/70', 'hover:text-darkbrown', 'hover:bg-darkbrown/5');
      });

      // Postavi premium gradient na kliknuti tab
      tab.classList.remove('bg-transparent', 'text-dark/70', 'hover:text-darkbrown', 'hover:bg-darkbrown/5');
      tab.classList.add('bg-gradient-to-tr', 'from-darkbrown', 'to-accent-gold', 'text-white', 'font-medium', 'shadow-md', 'is-active');

      // Animacija strelica za feedback
      const leftBtn = tab.closest('.relative')?.querySelector('.scroll-left');
      const rightBtn = tab.closest('.relative')?.querySelector('.scroll-right');
      if(leftBtn) {
          leftBtn.classList.add('bg-darkbrown', 'text-white');
          setTimeout(() => leftBtn.classList.remove('bg-darkbrown', 'text-white'), 200);
      }
      if(rightBtn) {
          rightBtn.classList.add('bg-darkbrown', 'text-white');
          setTimeout(() => rightBtn.classList.remove('bg-darkbrown', 'text-white'), 200);
      }

      // Prikazi grid
      productGrids.forEach(grid => {
        if (grid.id.startsWith(`grid-${parentKey}`)) {
          if (grid.id === `grid-${parentKey}-${subKey}`) {
            grid.classList.remove('hidden');
            setTimeout(() => grid.classList.remove('opacity-0'), 10);
          } else {
            grid.classList.add('hidden', 'opacity-0');
          }
        }
      });
    });
  });
});