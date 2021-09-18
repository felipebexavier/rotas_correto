import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function SecondMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/articular/mao" className="mao"> Mao </Link> </li>
                        <li> <Link to = "/articular/quadril" className="quadril"> Quadril </Link> </li>
                        <li> <Link to = "/articular/joelho" className="joelho"> Joelho </Link> </li>
                        <li> <Link to = "/articular/coluna" className="coluna"> Coluna </Link> </li>
                        <li> <Link to = "/articular/ombro" className="ombro"> Ombro </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}