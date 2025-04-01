const catalogData = [
  {
    category: "Vaporizing Equipment",
    subcategories: [
      {
        name: "Vaporizers",
        products: [
          { name: "Dry Type Vaporizers", power: "Medium" },
          { name: "Water Bath Type Vaporizers", power: "High" },
        ],
      },
      {
        name: "Vaporizing Units",
        products: [
          { name: "Frame Mounted", power: "Low" },
          { name: "Cabinet Type", power: "Medium" },
          { name: "Container Type", power: "High" },
          { name: "Boiler Based Self-heating", power: "Medium" },
        ],
      },
    ],
  },
  {
    category: "Vaporizing and Blending Units",
    subcategories: [
      {
        name: "Cabinet Type",
        products: [],
      },
      {
        name: "Container Type",
        products: [],
      },
    ],
  },
  {
    category: "Pumps",
    subcategories: [
      {
        name: "Pumps and Pumping Units",
        products: [],
      },
      {
        name: "Self-priming Units",
        products: [],
      },
      {
        name: "Pumping and Metering Units",
        products: [],
      },
    ],
  },
  {
    category: "Compressors",
    subcategories: [
      {
        name: "Piston Compressors and Compressor Units",
        products: [],
      },
      {
        name: "Screw Compressors and Compressor Units",
        products: [],
      },
    ],
  },
  {
    category: "Autonomous Gas Supply",
    subcategories: [
      {
        name: "For Private Households",
        products: [],
      },
      {
        name: "For Enterprises",
        products: [],
      },
    ],
  },
  {
    category: "Gas Filling Stations",
    subcategories: [
      {
        name: "General",
        products: [],
      },
    ],
  },
  {
    category: "Gas Generators",
    subcategories: [
      {
        name: "General",
        products: [
          { id: "fas-5-1lm", name: "FAS-5/1LM (5 kW)", power: "Low" },
          { id: "fas-8-1lm", name: "FAS-8/1LM (8 kW)", power: "Low" },
          { id: "fas-8-1vp", name: "FAS-8-1/VP (8 kW)", power: "Low" },
          { id: "fas-10-1vp", name: "FAS-10-1/VP (10 kW)", power: "Medium" },
          { id: "fas-10-3vp", name: "FAS-10-3/VP (10 kW)", power: "Medium" },
          { id: "fas-13-1vp", name: "FAS-13-1/VP (13 kW)", power: "Medium" },
          { id: "fas-13-3vp", name: "FAS-13-3/VP (13 kW)", power: "Medium" },
          { id: "fas-15-3lm", name: "FAS-15/3LM (15 kW)", power: "Medium" },
          { id: "fas-15-1vr", name: "FAS-15-1/VR (15 kW)", power: "Medium" },
          { id: "fas-15-3vr", name: "FAS-15-3/VR (15 kW)", power: "Medium" },
          { id: "fas-18-1vr", name: "FAS-18-1/VR (18 kW)", power: "Medium" },
          { id: "fas-18-3vr", name: "FAS-18-3/VR (18 kW)", power: "Medium" },
          { id: "fas-21-1vp", name: "FAS-21-1/VP (21 kW)", power: "Medium" },
          { id: "fas-21-3vr", name: "FAS-21-3/VR (21 kW)", power: "Medium" },
          { id: "fas-24-3vr", name: "FAS-24-3/VR (24 kW)", power: "Medium" },
          { id: "fas-28-3vp", name: "FAS-28-3/VP (28 kW)", power: "Medium" },
          { id: "fas-32-3vp", name: "FAS-32-3/VP (32 kW)", power: "Medium" },
          { id: "fas-35-3zr", name: "FAS-35-3/ZR (35 kW)", power: "High" },
          { id: "fas-40-3zr", name: "FAS-40-3/ZR (40 kW)", power: "High" },
          { id: "fas-40-3m", name: "FAS-40-3/M (40 kW)", power: "High" },
          { id: "cogeneration-unit-fas-50-70m", name: "Cogeneration Unit FAS-50/70M (50 kW)", power: "High" },
          { id: "fas-50-3m", name: "FAS-50-3/M (50 kW)", power: "High" },
          { id: "fas-100-3yp", name: "FAS-100-3/YP (100 kW)", power: "High" },
          { id: "fas-150-3yp", name: "FAS-150-3/YP (150 kW)", power: "High" },
          { id: "fas-315-3yp", name: "FAS-315-3/YP (315 kW)", power: "High" },
        ],
      },
    ],
  },
  {
    category: "REGO",
    subcategories: [
      {
        name: "ACME, CGA, POL Fittings & Adapters",
        products: [
          {
            type: "POL Plugs",
            items: [
              { id: "pol-plugs", name: "POL Plugs", image: "images/placeholder-1.png" },
              { id: "n970p", name: "N970P", image: "images/placeholder-1.png" },
              { id: "3705rc", name: "3705RC", image: "images/placeholder-1.png" },
              { id: "10538p", name: "10538P", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "Inverted Flare Adapters",
            items: [
              { id: "inverted-flare-adapters", name: "Inverted Flare Adapters", image: "images/placeholder-1.png" },
              { id: "15774-1", name: "15774-1", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "Flare Adapters",
            items: [
              { id: "flare-adapters", name: "Flare Adapters", image: "images/placeholder-1.png" },
              { id: "2906-flare-adapters", name: "2906 Flare Adapters", image: "images/placeholder-1.png" },
              { id: "1328", name: "1328", image: "images/placeholder-1.png" },
              { id: "1331", name: "1331", image: "images/placeholder-1.png" },
              { id: "1332", name: "1332", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "Filling Adapters",
            items: [
              { id: "filling-adapters", name: "Filling Adapters", image: "images/placeholder-1.png" },
              { id: "7193u-10l", name: "7193U-10L", image: "images/placeholder-1.png" },
              { id: "7193u-10-series", name: "7193U-10 Series", image: "images/placeholder-1.png" },
              { id: "7193t-10", name: "7193T-10", image: "images/placeholder-1.png" },
              { id: "7193l-10a", name: "7193L-10A", image: "images/placeholder-1.png" },
              { id: "7193d-10l", name: "7193D-10L", image: "images/placeholder-1.png" },
              { id: "7193d-10", name: "7193D-10", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "CGA 555 Adapters",
            items: [
              { id: "cga-555-adapters", name: "CGA 555 Adapters", image: "images/placeholder-1.png" },
              { id: "12982", name: "12982", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "CGA 510 (POL) Swivel Adapters",
            items: [
              { id: "cga-510-pol-swivel-adapters", name: "CGA 510 (POL) Swivel Adapters", image: "images/placeholder-1.png" },
              { id: "970-series", name: "970 Series", image: "images/placeholder-1.png" },
              { id: "3188-series-adapters", name: "3188 Series – Adapters", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "CGA 510 (POL) Adapters",
            items: [
              { id: "cga-510-pol-adapters", name: "CGA 510 (POL) Adapters", image: "images/placeholder-1.png" },
              { id: "5760-series-pol-adapters", name: "5760 Series – POL Adapters", image: "images/placeholder-1.png" },
              { id: "2906-series", name: "2906 Series", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "ACME Spanner Wrench",
            items: [
              { id: "acme-spanner-wrench", name: "ACME Spanner Wrench", image: "images/placeholder-1.png" },
              { id: "3195-50", name: "3195-50", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "ACME Plugs",
            items: [
              { id: "acme-plugs", name: "ACME Plugs", image: "images/placeholder-1.png" },
              { id: "c5769n", name: "C5769N", image: "images/placeholder-1.png" },
              { id: "c5767n", name: "C5767N", image: "images/placeholder-1.png" },
              { id: "c5765n", name: "C5765N", image: "images/placeholder-1.png" },
              { id: "c5763n", name: "C5763N", image: "images/placeholder-1.png" },
              { id: "5765pr", name: "5765PR", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "ACME Connectors",
            items: [
              { id: "acme-connectors", name: "ACME Connectors", image: "images/placeholder-1.png" },
              { id: "7142-series", name: "7142 Series", image: "images/placeholder-1.png" },
              { id: "7141-series", name: "7141 Series", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "ACME Caps",
            items: [
              { id: "acme-caps", name: "ACME Caps", image: "images/placeholder-1.png" },
              { id: "907fp", name: "907FP", image: "images/placeholder-1.png" },
              { id: "7141fp", name: "7141FP", image: "images/placeholder-1.png" },
              { id: "3184-91", name: "3184-91", image: "images/placeholder-1.png" },
              { id: "3175l", name: "3175L", image: "images/placeholder-1.png" },
              { id: "3174-90-series", name: "3174-90 Series", image: "images/placeholder-1.png" },
              { id: "3144-91", name: "3144-91", image: "images/placeholder-1.png" },
            ],
          },
          {
            type: "ACME Adapters",
            items: [
              { id: "acme-adapters", name: "ACME Adapters", image: "images/placeholder-1.png" },
              { id: "5760-series-acme-adapters", name: "5760 Series – ACME Adapters", image: "images/placeholder-1.png" },
              { id: "a-5700-series", name: "(A)5700 Series", image: "images/placeholder-1.png" },
              { id: "a-3195-series", name: "(A)3195 Series", image: "images/placeholder-1.png" },
              { id: "a-3194-90l-series", name: "(A)3194-90L Series", image: "images/placeholder-1.png" },
              { id: "a-3194-90-series", name: "(A)3194-90 Series", image: "images/placeholder-1.png" },
              { id: "a-3185-series", name: "(A)3185 Series", image: "images/placeholder-1.png" },
              { id: "a-3184-90", name: "(A)3184-90", image: "images/placeholder-1.png" },
              { id: "a-3175-series", name: "(A)3175 Series", image: "images/placeholder-1.png" },
              { id: "a-3175", name: "(A)3175", image: "images/placeholder-1.png" },
              { id: "a8016-93", name: "A8016-93", image: "images/placeholder-1.png" },
              { id: "a7575-series", name: "A7575 Series", image: "images/placeholder-1.png" },
              { id: "a7571-series", name: "A7571 Series", image: "images/placeholder-1.png" },
              { id: "a7568le", name: "A7568LE", image: "images/placeholder-1.png" },
              { id: "a5764w", name: "A5764W", image: "images/placeholder-1.png" },
              { id: "a5760-series", name: "A5760 Series", image: "images/placeholder-1.png" },
              { id: "7577v-series-adapters", name: "7577V Series – Adapters", image: "images/placeholder-1.png" },
              { id: "3191", name: "3191", image: "images/placeholder-1.png" },
              { id: "3179b-series-adapters", name: "3179B Series – Adapters", image: "images/placeholder-1.png" },
              { id: "3179a-acme-adapters", name: "3179A – ACME Adapters", image: "images/placeholder-1.png" },
              { id: "3171-series", name: "3171 Series", image: "images/placeholder-1.png" },
              { id: "3121-series", name: "3121 Series", image: "images/placeholder-1.png" },
              { id: "3120-series", name: "3120 Series", image: "images/placeholder-1.png" },
              { id: "3119a-series", name: "3119A Series", image: "images/placeholder-1.png" }
            ]
          }
        ]
      }
    ]
  }
];

// Собираем список категорий для селекта (включая "All Categories")
const allCategories = ["All Categories", ...catalogData.map(cat => cat.category)];

// Обработка ошибок и проверка существования элементов
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Element with id "${id}" not found`);
  }
  return element;
}

// Безопасное обновление содержимого элемента
function updateElementContent(id, content) {
  const element = getElement(id);
  if (element) {
    element.innerHTML = content;
  }
}

// Улучшенная функция showMainMenu с обработкой ошибок
function showMainMenu() {
  try {
    const content = getElement('content');
    const filters = getElement('filters');
    const searchBar = getElement('searchBar');

    if (!content || !filters || !searchBar) {
      throw new Error('Required elements not found');
    }

    // Очищаем контент
    content.innerHTML = '';
    
    // Показываем фильтры
    filters.style.display = 'flex';
    filters.innerHTML = `
      <div class="filters-container">
        <select id="categoryFilter" aria-label="Filter by category">
          <option value="All Categories">All Categories</option>
        </select>
      </div>
    `;
    
    // Добавляем поисковую строку
    searchBar.innerHTML = `
      <div class="search-container">
        <input type="text" 
               id="searchInput" 
               placeholder="Search products..."
               aria-label="Search products">
        <div class="search-icon">🔍</div>
      </div>
    `;

    // Инициализируем фильтры и поиск
    initializeFilters();
    
    // Отображаем каталог
    renderCatalog();

  } catch (error) {
    console.error('Error in showMainMenu:', error);
    alert('Error loading catalog. Please refresh the page.');
  }
}

// Функция для debounce поиска
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Функция для нечеткого поиска
function fuzzySearch(text, searchTerm) {
  if (!text || !searchTerm) return false;
  text = text.toLowerCase();
  searchTerm = searchTerm.toLowerCase();
  
  // Разбиваем поисковый запрос на слова
  const searchWords = searchTerm.split(/\s+/);
  
  // Все слова должны найтись в тексте
  return searchWords.every(word => text.includes(word));
}

function applyFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const searchInput = document.getElementById("searchInput");
  
  if (!categoryFilter || !searchInput) return;

  const selectedCategory = categoryFilter.value;
  const searchText = searchInput.value.trim();

  // Копируем данные для фильтрации
  let filteredData = [...catalogData];

  // Фильтруем по категории
  if (selectedCategory && selectedCategory !== "All Categories") {
    filteredData = filteredData.filter(cat => cat.category === selectedCategory);
  }

  // Фильтруем по поисковому запросу
  if (searchText) {
    filteredData = filteredData.map(category => {
      // Проверяем совпадение в названии категории
      const categoryMatch = fuzzySearch(category.category, searchText);
      
      // Копируем категорию
      const filteredCategory = { ...category };
      
      // Фильтруем подкатегории
      filteredCategory.subcategories = category.subcategories
        .map(subcategory => {
          // Проверяем совпадение в названии подкатегории
          const subcategoryMatch = fuzzySearch(subcategory.name, searchText);
          
          // Копируем подкатегорию
          const filteredSubcategory = { ...subcategory };
          
          if (category.category === "REGO") {
            // Фильтруем REGO продукты
            filteredSubcategory.products = subcategory.products
              .filter(group => {
                // Проверяем совпадение в типе группы
                const typeMatch = fuzzySearch(group.type, searchText);
                
                // Проверяем совпадения в items
                const itemsMatch = group.items.some(item => 
                  fuzzySearch(item.name, searchText) || 
                  fuzzySearch(item.id, searchText)
                );
                
                return typeMatch || itemsMatch || categoryMatch || subcategoryMatch;
              })
              .map(group => ({
                ...group,
                items: group.items.filter(item =>
                  fuzzySearch(item.name, searchText) ||
                  fuzzySearch(item.id, searchText) ||
                  fuzzySearch(group.type, searchText) ||
                  categoryMatch ||
                  subcategoryMatch
                )
              }));
          } else {
            // Фильтруем обычные продукты
            filteredSubcategory.products = subcategory.products.filter(product =>
              fuzzySearch(product.name, searchText) ||
              (product.id && fuzzySearch(product.id, searchText)) ||
              (product.power && fuzzySearch(product.power, searchText)) ||
              categoryMatch ||
              subcategoryMatch
            );
          }
          
          return filteredSubcategory;
        })
        .filter(sub => {
          if (category.category === "REGO") {
            return sub.products.length > 0 && sub.products.some(group => group.items.length > 0);
          }
          return sub.products.length > 0;
        });
      
      return filteredCategory;
    })
    .filter(cat => cat.subcategories.length > 0);
  }

  // Рендерим отфильтрованные результаты
  renderFilteredCatalog(filteredData);
  
  // Раскрываем все категории при поиске
  if (searchText) {
    document.querySelectorAll('.catalog-category, .catalog-subcategory, .product-type').forEach(el => {
      el.classList.remove('collapsed');
    });
  }
}

function renderProductCard(product) {
  const id = product.id || '';
  const name = product.name || 'Unknown Product';
  const image = product.image || 'images/placeholder-1.png';
  
  return `
    <div class="product-card" id="${id}">
      <img src="${image}" alt="${name}" loading="lazy" />
      <a href="product.html?id=${id}">${name}</a>
    </div>
  `;
}

function renderProductGrid(products) {
  if (!products || products.length === 0) {
    return '<p class="empty-note">No products yet.</p>';
  }
  
  return `
    <div class="product-grid">
      ${products.map(product => renderProductCard(product)).join('')}
    </div>
  `;
}

function renderREGOProducts(products) {
  if (!products || !Array.isArray(products)) {
    return '<p class="empty-note">No products available.</p>';
  }
  
  return products.map(group => `
    <div class="product-type">
      <h4>${group.type}</h4>
      <div class="type-content">
        ${renderProductGrid(group.items)}
      </div>
    </div>
  `).join('');
}

function renderFilteredCatalog(filteredData) {
  const container = document.getElementById("content");
  
  if (!filteredData || filteredData.length === 0) {
    container.innerHTML = '<p class="empty-note">No results found.</p>';
    return;
  }

  let html = "";
  
  filteredData.forEach(category => {
    html += `
      <div class="catalog-category">
        <h2>${category.category}</h2>
        <div class="category-content">
    `;

    category.subcategories?.forEach(subcategory => {
      html += `
        <div class="catalog-subcategory">
          <h3>${subcategory.name}</h3>
          <div class="subcategory-content">
      `;

      // Проверяем, является ли это категорией REGO
      if (category.category === "REGO") {
        html += renderREGOProducts(subcategory.products);
      } else {
        html += renderProductGrid(subcategory.products);
      }

      html += '</div></div>';
    });

    html += '</div></div>';
  });

  container.innerHTML = html;
  
  // Инициализируем раскрывающееся поведение
  initializeCollapsible();
}

function initializeCollapsible() {
  document.querySelectorAll('.catalog-category h2, .catalog-subcategory h3, .product-type h4').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = header.parentElement;
      parent.classList.toggle('collapsed');
    });
  });
  
  // По умолчанию сворачиваем все категории, кроме первой
  document.querySelectorAll('.catalog-category:not(:first-child), .catalog-subcategory, .product-type').forEach(el => {
    el.classList.add('collapsed');
  });
}

function renderCatalog() {
  renderFilteredCatalog(catalogData);
}

// Экспортируем функции
window.showMainMenu = showMainMenu;
window.renderCatalog = renderCatalog;
window.applyFilters = applyFilters;

// Экспортируем функции в глобальный scope, чтобы они были доступны из HTML (onload, onchange)
window.showMainMenu = showMainMenu;

// Обработка кнопки "назад"
window.addEventListener('popstate', (e) => {
  if (e.state?.page === 'catalogue') {
    document.body.classList.add("catalogue-mode");
    showMainMenu();
  } else {
    document.body.classList.remove("catalogue-mode");
  }
});

// Глобальная функция для вызова из кнопки
window.goToCatalog = function () {
  history.pushState({ page: 'catalogue' }, '', '');
  showMainMenu();
};

window.goToAbout = function () {
  history.pushState({}, '', location.pathname);
  location.reload();
};

// Добавляем debounce для поиска
const debouncedSearch = debounce(() => {
  applyFilters();
}, 300);

// Инициализация фильтров и поиска
function initializeFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const searchInput = document.getElementById("searchInput");

  if (categoryFilter) {
    categoryFilter.innerHTML = allCategories.map(cat =>
      `<option value="${cat}">${cat}</option>`
    ).join('');
    
    categoryFilter.addEventListener('change', applyFilters);
  }

  if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);
    
    // Добавляем обработку Enter
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters();
      }
    });
  }
}