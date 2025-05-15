import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { LocaleType } from "../lib/definitions";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";

const translations = { fr, en, es };

const LocaleContext = createContext<LocaleType>({
  lang: "fr",
  testLanguage: () => undefined,
  translations: translations.fr,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<"fr" | "en" | "es">(
    "fr",
  );

  const testLanguage = (lang: "fr" | "en" | "es") => {
    setCurrentLanguage(lang);
  };

  const value = {
    lang: currentLanguage,
    translations: translations[currentLanguage],
    testLanguage,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LocaleContext);
}
