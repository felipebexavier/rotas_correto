import '../MainStyle.css'
import React from 'react'

import { Link } from "react-router-dom";

export default function Record() {
    return (
        <div className="body">
            <div className="imagem-container">

            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}