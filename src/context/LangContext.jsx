import React from 'react';
import { useState } from 'react';

export const LangContext = React.createContext();
const supportedLanguages = ['en', 'fr', 'es'];
let navigatorLang = navigator.language.substring(0, 2);
if (!supportedLanguages.includes(navigatorLang)) {
  navigatorLang = 'en';
}
console.log(navigatorLang);

export default function LangProvider(props) {
  const [lang, setLang] = useState(navigatorLang);
  console.log(lang)

  const changeLang = (newLang) => {
    setLang(newLang);
  }
  
  return (
    <LangContext.Provider value={{lang, changeLang}}>
      {props.children}
    </LangContext.Provider>
  );
}