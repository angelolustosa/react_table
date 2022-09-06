import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './FormBook.css';

export default function FormBook() {
    const formEl = useRef();
    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [year, setYear] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        const data = new FormData(e.target);
        const formJSON = Object.fromEntries(data.entries());

        //window.location.href = "http://127.0.0.1:5500/index.html"

        console.log(`data:`, formJSON)
    }

    return (
        <form ref={formEl} onSubmit={handleSubmit}>
            <label>Autor:</label>
            <input
                type="text"
                id="author"
                name="author"
                //value="John"
                value={author}
                onChange={e => setAuthor(e.target.value)} />
            <br />

            <label>Titulo:</label>
            <input
                type="text"
                id="title"
                name="title"
                //value="Doe"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br /><br />

            <label>Ano:</label>
            <input
                type="number"
                id="year"
                name="year"
                //value="2020"
                value={year}
                onChange={e => setYear(e.target.value)}
            /><br /><br />

            <input type="submit" value="Submit"></input>
            <input type="reset" value="Reset"></input>
        </form>
    );
}

