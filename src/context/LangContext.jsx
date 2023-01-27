import React from 'react';
import { useState, useEffect } from 'react';

const LangContext = React.createContext();
const supportedLanguages = ['en', 'fr', 'es'];

export function LangProvider(props) {
  const [lang, setLang] = useState(navigator.language.substring(0, 2) || 'en');

  useEffect(() => {
    const navigatorLang = navigator.language.substring(0, 2);
    console.log(navigator.language);
    if (supportedLanguages.includes(navigatorLang)) {
      setLang(navigatorLang);
    } else {
      setLang('en');
    }
  }, []);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {props.children}
    </LangContext.Provider>
  );
}

export default LangContext;