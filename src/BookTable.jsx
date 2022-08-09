
//rfce
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { productsGenerator } from './products';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './BookTable.css'
function BookTable() {

    const [user, setUser] = useState([])

    const products = productsGenerator(500);
    console.log(products)

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => {
                console.log(`usuarios`, data)
                setUser(data)
            })
    }, [])
    return (
        <div>
            <BootstrapTable striped keyField='id' data={products} columns={columns} pagination={paginationFactory()} />
        </div>
    )
}

export default BookTable