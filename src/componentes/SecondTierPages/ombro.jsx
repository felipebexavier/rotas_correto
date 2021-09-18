import '../MainStyle.css'
import React from 'react'
import ombro from '../images/Ombro.png'
import { Link } from "react-router-dom";

export default function Ombro() {
    return (
        <div>
            <div className="imagem-container">
            <img src={ombro} alt="ombro" className="ombroimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}