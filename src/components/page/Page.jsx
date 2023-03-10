import React, { useContext } from "react";
import {LangContext} from "../../context/LangContext";
import locale from "../../data/Locale"
import Button from "../button/Button";

function Page() {

    const {lang} = useContext(LangContext); // Selected language

    return (
        <div className="container">
            <div className="langContainer"> {/** Buttons used to set the language, the "LangCode" prop is the language to set*/}
                <Button langCode="fr" />
                <Button langCode="en" />
                <Button langCode="es" />
            </div>
            <div className="textContainer">
                <h1 className="title">{locale[lang].title}</h1> {/** Page content, the selected language alters it*/}
                <p className="text">{locale[lang].welcome}</p>
                <p className="paragraph">{locale[lang].paragraph1}</p>
                <p className="paragraph">{locale[lang].paragraph2}</p>
            </div>
        </div>
    );
}

export default Page;