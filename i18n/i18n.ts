import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { es } from "./es";

const resources = {
  "en-US": { translation: en },
    "es-ES": { translation: es },
};

const initI18n = () => {
let savedLanguage = undefined;

  if (!savedLanguage) {
    const locales = Localization.getLocales();
    savedLanguage = locales && locales.length > 0 ? locales[0].languageTag : "en-US";
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;