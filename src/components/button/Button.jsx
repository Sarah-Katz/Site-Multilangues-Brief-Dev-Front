import React, { useContext } from 'react';
import LangContext from '../../context/LangContext';

const Button = ({ langCode }) => {
  const [lang, setLang] = useContext(LangContext);
  let flag;
  switch (langCode) {
    case "FR":
      flag = <img src="./images/icones/france.svg" alt="French Flag" />;
      break;
    case "EN":
      flag = <img src="./images/icones/united-kingdom.svg" alt="English Flag" />;
      break;
    case "ES":
      flag = <img src="./images/icones/spain.svg" alt="Spanish Flag" />;
      break;
    default:
      flag = <img src="./images/icones/united-kingdom.svg" alt="Engish Flag" />;
  }

  return (
    <button className="langButton" onClick={() => setLang(langCode)}>
      {flag}
    </button>
  );
};

export default Button;
