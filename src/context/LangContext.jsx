import React from 'react';
import { useState } from 'react';

export const LangContext = React.createContext();
const supportedLanguages = ['en', 'fr', 'es']; // languages supported by the app
let navigatorLang = navigator.language.substring(0, 2); // We get the first two char of the navigator's language eg :'fr'
if (!supportedLanguages.includes(navigatorLang)) {// We check that the navigator's language is supportted
  navigatorLang = 'en'; // if not, it's set to English as default
}

export default function LangProvider(props) {
  const [lang, setLang] = useState(navigatorLang); // Selected language state

  const changeLang = (newLang) => { // Method used to change the selected language
    setLang(newLang);
  }

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {props.children}
    </LangContext.Provider>
  );
}