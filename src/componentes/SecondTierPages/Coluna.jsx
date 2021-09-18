import '../MainStyle.css'
import React from 'react'
import coluna from '../images/Coluna.png'
import { Link } from "react-router-dom";

export default function Coluna() {
    return (
        <div>
            <div className="imagem-container">
            <img src={coluna}  alt="Coluna" className="Colunaimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}