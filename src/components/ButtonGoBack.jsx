import React from 'react'
import { useNavigate } from "react-router-dom";

function ButtonGoBack() {
    const navigate = useNavigate()

    const goHome = () => navigate("/");

    return (
        <button onClick={goHome}>
            Voltar para a tela inicial "/home"
        </button>
    )
}

export default ButtonGoBack