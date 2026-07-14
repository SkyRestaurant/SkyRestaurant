document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('pool-app');
  if (!appContainer) return;

  const menuData = JSON.parse(appContainer.getAttribute('data-menu') || '{}');
  
  let currentType: 'food' | 'drinks' = 'food';
  let currentCategory = '';

  const btnFood = document.getElementById('btn-food');
  const btnDrinks = document.getElementById('btn-drinks');
  const categoryContainer = document.getElementById('category-container');
  const productContainer = document.getElementById('product-container');

  if (!btnFood || !btnDrinks || !categoryContainer || !productContainer) return;

  function init() {
    btnFood?.addEventListener('click', () => switchType('food'));
    btnDrinks?.addEventListener('click', () => switchType('drinks'));
    switchType('food');
  }

  function switchType(type: 'food' | 'drinks') {
    currentType = type;

    const activeClass = "flex-1 py-2 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 shadow-sm";
    const inactiveClass = "flex-1 py-2 rounded-full text-gray-300 font-medium text-sm transition-all duration-300 hover:text-white";

    if (type === 'food') {
      if (btnFood) btnFood.className = activeClass;
      if (btnDrinks) btnDrinks.className = inactiveClass;
    } else {
      if (btnDrinks) btnDrinks.className = activeClass;
      if (btnFood) btnFood.className = inactiveClass;
    }

    renderCategories();
  }

  function renderCategories() {
    if (!menuData[currentType]) return;

    const categories = Object.keys(menuData[currentType]);
    currentCategory = categories[0];

    categoryContainer!.innerHTML = '';

    categories.forEach(category => {
      const btn = document.createElement('button');
      btn.textContent = category;

      btn.onclick = () => {
        currentCategory = category;
        updateCategoryUI();
        renderProducts();
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      };

      categoryContainer!.appendChild(btn);
    });

    updateCategoryUI();
    renderProducts();
  }

  function updateCategoryUI() {
    const buttons = categoryContainer!.querySelectorAll('button');
    buttons.forEach(btn => {
      if (btn.textContent === currentCategory) {
        // Veći, jasniji font za aktivnu kategoriju
        btn.className = 'whitespace-nowrap pb-2 text-base font-semibold transition-all duration-300 snap-center text-[#00A8E8] border-b-2 border-[#00A8E8]';
      } else {
        // Veći font za neaktivne
        btn.className = 'whitespace-nowrap pb-2 text-base font-normal transition-all duration-300 snap-center text-gray-400 hover:text-white border-b-2 border-transparent';
      }
    });
  }

  function renderProducts() {
    const items = menuData[currentType][currentCategory];
    productContainer!.innerHTML = '';

    if (!items || items.length === 0) {
      productContainer!.innerHTML = '<p class="text-center text-gray-500 mt-10 font-sans">Нема производи во оваа категорија.</p>';
      return;
    }

    items.forEach((item: any) => {
      // Opis sa većim fontom i sans-serif stilom
      const descHTML = item.description 
        ? `<p class="text-sm text-gray-400 mt-1.5 font-light font-sans leading-relaxed pr-4">${item.description}</p>` 
        : '';

      // Redizajnirano da savršeno prati tvoju drugu sliku (krupniji naslov i cena)
      const row = `
        <div class="py-6 border-b border-white/10 last:border-0 flex justify-between items-start gap-4">
          <div class="flex-1">
            <h3 class="text-lg font-semibold font-sans text-white tracking-wide">${item.name}</h3>
            ${descHTML}
          </div>
          <div class="flex-shrink-0 text-right mt-0.5">
            <span class="block text-xl font-bold font-sans text-white tracking-tight">${item.price}</span>
            <span class="block text-xs font-sans text-[#00A8E8] uppercase tracking-wider mt-0.5">ден.</span>
          </div>
        </div>
      `;
      productContainer!.insertAdjacentHTML('beforeend', row);
    });
  }

  init();
});