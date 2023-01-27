import React from 'react';
import './components/page/page.css'
import './App.css';
import LangProvider from './context/LangContext';
import Page from './components/page/Page';


function App() {

  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}

export default App;
