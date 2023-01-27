import React from 'react';
import { useState } from 'react';

const LangContext = React.createContext();

export function LangProvider(props) {
  const [lang, setLang] = useState('FR');

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {props.children}
    </LangContext.Provider>
  );
}

export default LangContext;