export type LocaleType = {
  lang: "fr" | "en" | "es";
  testLanguage: (lang: "fr" | "en" | "es") => void;
  translations: TranslationsType;
};

export type TranslationsType = {
  navbar: {
    home: string;
    gallery: string;
    museums: string;
    contact: string;
  };

  homepage: {
    incontournable: string;
    paragraph: string;
  };

  galerie: {
    exposition: string;
    artiste: string;
  };

  musées: {
    titre: string;
    texte: string;
    recherche: string;
  };

  form: {
    contact: string;
    nom: string;
    prénom: string;
    email: string;
    message: string;
    soumettre: string;
  };

  footer: {
    copyright: string;
    mentions_légales: string;
    politique_de_confidentialité: string;
  };
};
