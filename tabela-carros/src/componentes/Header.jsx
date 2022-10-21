import React from "react";
import logoReact from "../assets/react.svg";
import "./Header.css"

export function Header(){
    return(
        <header>
            <h1>Meu primeiro código com React</h1>
            <img src={logoReact} alt="Logo React"/>
        </header>
    )
}