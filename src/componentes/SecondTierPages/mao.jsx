import '../MainStyle.css'
import React from 'react'
import mao from '../images/Mao.png'
import { Link } from "react-router-dom";

export default function Mao() {
    return (
        <div>
            <div className="imagem-container">
            <img src={mao} alt="mao" className="maoimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}