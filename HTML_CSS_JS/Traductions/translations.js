const translations = {
  fr: {
    title: "Bienvenue",
    welcome: "Bienvenue sur mon site",
    description: "Ce site est multilingue."
  },
  en: {
    title: "Welcome",
    welcome: "Welcome to my website",
    description: "This site is multilingual."
  }
};

function changerLangue(langue) {
  // Tous les éléments avec l'attribut data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[langue][key]) {
      el.innerText = translations[langue][key];
    }
  });

  // Pour changer aussi le <title> de l'onglet
  document.title = translations[langue]["title"];
}