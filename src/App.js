import React, { useState } from 'react';
import './components/page/page.css'
import './App.css';
import LangContext from './context/LangContext';
import Page from './components/page/Page';


function App() {
  const [lang, setLang] = useState('FR');

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <Page />
    </LangContext.Provider>
  );
}

export default App;
