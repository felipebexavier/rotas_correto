import '../MainStyle.css'
import React from 'react'
import respiratorio from '../images/Respiratorio.png'
import { Link } from "react-router-dom";

export default function Respiratorio() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={respiratorio} alt="respiratorio" className="respiratorioimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}