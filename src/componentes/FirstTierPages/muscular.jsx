import '../MainStyle.css'
import React from 'react'
import musucular from '../images/Muscular.png'
import { Link } from "react-router-dom";

export default function Muscular() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={musucular} alt="muscular" className="muscularimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}