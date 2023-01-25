import React from 'react';
import './App.css';
import LangContext from './context/LangContext';
import Page from './components/page/Page';


function App() {

  return (
    <LangContext.Provider>
      <Page />
    </LangContext.Provider>
  );
}

export default App;
