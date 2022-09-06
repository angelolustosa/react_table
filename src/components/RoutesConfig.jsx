import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Book from '../pages/Books'
import FormBook from '../pages/FormBook'
import FormBook_API from '../pages/FormBook_API'
import Home from '../pages/Home'
import Table from '../pages/Table'
import NoPage from './NoPage'

export default function RoutesConfig() {

    // {/* Componente da tela inicial */ }
    // <Route index element={<Home />} />
    // {/* Componente de uma rota específica */ }
    // <Route path="form" element={<FormBook />} />
    // {/* Componente de uma rota específica */ }
    // <Route path="table" element={<Table />} />
    // {/* Componente para quando não encontrar uma rota */ }
    // <Route path="*" element={<NoPage />} />

    const routes = [{
        path: '/book',
        element: <Book />
    }, {
        path: '/',
        element: <Home />
    }, {
        path: 'form',
        element: <FormBook />
    }, {
        path: 'table',
        element: <Table />
    }, {
        path: '/form-api',
        element: <FormBook_API />
    }, {
        path: '*',
        element: <NoPage />
    }]
    return (
        <Routes>
            {routes.map((r, index) => <Route key={index} path={r.path} element={r.element} />)}
        </Routes>
    )
}
