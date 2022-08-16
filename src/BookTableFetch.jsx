
//rfce
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { productsGenerator } from './products';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './BookTable.css'
function BookTableFetch() {

    const [user, setUser] = useState([])

    const products = productsGenerator(500);
    console.log(products)

    const columns = [{
        dataField: 'id',
        text: 'Id'
    }, {
        dataField: 'name',
        text: 'Nome'
    }, {
        dataField: 'email',
        text: 'Email'
    }];

    const sizePerPageOptionRenderer = ({
        text,
        page,
        onSizePerPageChange
    }) => (
        <li
            key={text}
            role="presentation"
            className="dropdown-item"
        >
            <a
                href="#"
                tabIndex="-1"
                role="menuitem"
                data-page={page}
                onMouseDown={(e) => {
                    e.preventDefault();
                    onSizePerPageChange(page);
                }}
                style={{ color: 'red' }}
            >
                {text}
            </a>
        </li>
    );

    const options = {
        sizePerPageOptionRenderer
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(data => {
                console.log(`usuarios`, data)
                setUser(data)
            })
    }, [])
    return (
        <div>
            <BootstrapTable striped keyField='id' data={user} columns={columns} pagination={paginationFactory()} />
        </div>
    )
}

export default BookTableFetch