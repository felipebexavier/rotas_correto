import '../MainStyle.css'
import React from 'react'
import joelho from '../images/Joelho.png'
import { Link } from "react-router-dom";

export default function Joelho() {
    return (
        <div>
            <div className="imagem-container">
            <img src={joelho} alt="joelho" className="joelhoimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}