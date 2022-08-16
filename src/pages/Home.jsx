
//rfc
import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1> Page for Home </h1><ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/table">Table</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
            </ul>
        </>
    )
}