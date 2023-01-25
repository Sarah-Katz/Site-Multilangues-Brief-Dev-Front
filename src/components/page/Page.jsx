import React, { useContext } from "react";
import LangContext from "../../context/LangContext";
import FR from "../../data/locale/FR";

function Page() {

const lang = useContext(LangContext);

    return (
        <div class="text">
            <h1>{FR.title}</h1>
        </div>
    );
}

export default Page;