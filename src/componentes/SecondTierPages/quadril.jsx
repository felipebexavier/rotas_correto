import '../MainStyle.css'
import React from 'react'
import quadril from '../images/Quadril.png'
import { Link } from "react-router-dom";

export default function Quadril() {
    return (
        <div>
            <div className="imagem-container">
            <img src={quadril} alt="quadril" className="quadrilimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}