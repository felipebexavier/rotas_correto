import '../MainStyle.css'
import React from 'react'
import cardiovascular from '../images/Cardiovascular.png'
import { Link } from "react-router-dom";

export default function Cardiovascular() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={cardiovascular} alt="cardiovascular" className="cardiovascularimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}