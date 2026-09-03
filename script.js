document.addEventListener('DOMContentLoaded', () => {
  // Controle de Tamanho de Fonte
  let currentFontSize = 16;
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');

  btnFontIncrease.addEventListener('click', () => {
    if (currentFontSize < 24) {
      currentFontSize += 2;
      document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
    }
  });

  btnFontDecrease.addEventListener('click', () => {
    if (currentFontSize > 12) {
      currentFontSize -= 2;
      document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
    }
  });

  // Alternar Modo Claro e Escuro
  const btnThemeToggle = document.getElementById('btn-theme-toggle');

  btnThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      btnThemeToggle.textContent = 'Modo Claro';
    } else {
      btnThemeToggle.textContent = 'Modo Escuro';
    }
  });

  // Ação da Barra de Pesquisa
  const btnSearch = document.getElementById('btn-search');
  const inputSearch = document.getElementById('site-search');

  btnSearch.addEventListener('click', () => {
    const query = inputSearch.value.trim();
    if (query !== '') {
      alert(`Pesquisando por: "${query}"`);
    } else {
      alert('Por favor, digite algum termo no campo de pesquisa.');
    }
  });
});
