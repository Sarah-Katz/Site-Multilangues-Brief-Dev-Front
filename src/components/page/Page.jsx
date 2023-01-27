import React, { useContext } from "react";
import LangContext from "../../context/LangContext";
import locale from "../../data/Locale"
import Button from "../button/Button";

function Page() {

    const [lang, setLang] = useContext(LangContext);

    return (
        <div className="container">
            <div className="langContainer">
                <Button langCode="FR" />
                <Button langCode="EN" />
                <Button langCode="ES" />
            </div>
            <div className="textContainer">
                <h1 className="title">{locale[lang].title}</h1>
                <p className="text">{locale[lang].welcome}</p>
            </div>
        </div>
    );
}

export default Page;