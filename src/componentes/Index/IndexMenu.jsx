import React from "react";
import { Link } from "react-router-dom";

import './IndexMenu.css'

export default function IndexMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/articular" className="articular"> Articular </Link> </li>
                        <li> <Link to = "/cardiovascular" className="cardiovascular"> Cardiovascular </Link> </li>
                        <li> <Link to = "/esqueletico" className="esqueletico"> Esqueletico </Link> </li>
                        <li> <Link to = "/muscular" className="muscular"> Muscular </Link> </li>
                        <li> <Link to = "/respiratorio" className="respiratorio"> Respiratorio </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}