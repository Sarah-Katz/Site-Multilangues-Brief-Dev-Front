import React, { useContext } from 'react';
import {LangContext} from '../../context/LangContext';

const Button = ({ langCode }) => {
  const {changeLang} = useContext(LangContext);
  let flag;
  switch (langCode) {
    case "fr":
      flag = <img src="./images/icones/france.svg" alt="French Flag" />;
      break;
    case "en":
      flag = <img src="./images/icones/united-kingdom.svg" alt="English Flag" />;
      break;
    case "es":
      flag = <img src="./images/icones/spain.svg" alt="Spanish Flag" />;
      break;
    default:
      flag = <img src="./images/icones/united-kingdom.svg" alt="Engish Flag" />;
  }

  return (
    <button className="langButton" onClick={() => changeLang(langCode)}>
      {flag}
    </button>
  );
};

export default Button;
