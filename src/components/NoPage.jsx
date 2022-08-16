import React from 'react'
import ButtonGoBack from './ButtonGoBack'
//import { useNavigate } from "react-router-dom";


function NoPage() {
    // const navigate = useNavigate()

    // const goHome = () => navigate("/");

    return (
        <>
            <h1>404 - </h1>
            {/* <button onClick={goHome}>
                Voltar para a tela inicial "/home"
            </button> */}
            <ButtonGoBack />
        </>
    )
}

export default NoPage