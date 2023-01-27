import React, { useContext } from "react";
import {LangContext} from "../../context/LangContext";
import locale from "../../data/Locale"
import Button from "../button/Button";

function Page() {

    const {lang} = useContext(LangContext);

    return (
        <div className="container">
            <div className="langContainer">
                <Button langCode="fr" />
                <Button langCode="en" />
                <Button langCode="es" />
            </div>
            <div className="textContainer">
                <h1 className="title">{locale[lang].title}</h1>
                <p className="text">{locale[lang].welcome}</p>
                <p className="paragraph">{locale[lang].paragraph1}</p>
                <p className="paragraph">{locale[lang].paragraph2}</p>
            </div>
        </div>
    );
}

export default Page;