// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
  const langBtns = document.querySelectorAll('.lang-btn');
  const contentLangs = document.querySelectorAll('.content-lang');

  // Initialize with English as default
  setLanguage('en');

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  function setLanguage(lang) {
    // Update button states
    langBtns.forEach((btn) => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });

    // Update content visibility
    contentLangs.forEach((content) => {
      content.classList.remove('active');
    });
    document.getElementById(`content-${lang}`).classList.add('active');

    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update page language attribute
    document.documentElement.lang = lang;

    // Update page title
    const titles = {
      en: 'Bookson Privacy Policy',
      ja: 'Bookson プライバシーポリシー',
      es: 'Política de Privacidad de Bookson',
    };
    document.title = titles[lang];
  }
});
