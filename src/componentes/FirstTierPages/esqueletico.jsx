import '../MainStyle.css'
import React from 'react'
import esqueletico from '../images/Esqueletico.png'
import { Link } from "react-router-dom";

export default function Esqueletico() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={esqueletico} alt="esqueletico" className="esqueleticoimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}