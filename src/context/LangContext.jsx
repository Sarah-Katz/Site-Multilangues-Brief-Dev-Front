import React from 'react';
import { useState } from 'react';

const LangContext = React.createContext();

export function LangProvider(props) {
    const [lang, setLang] = useState('FR');
    const locale = {
        EN: {
          greeting: 'Hello',
          goodbye: 'Goodbye'
        },
        FR: {
          greeting: 'Bonjour',
          goodbye: 'Au revoir'
        }
      } 

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {props.children}
        </LangContext.Provider>
    );
}

export default LangContext;