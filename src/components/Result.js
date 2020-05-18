import React from 'react'
import { Table } from 'react-bootstrap'
export default function Result(props) {
    let items = props.items.map((item) =>
        <tr className={item.amount > 9 ? 'bg-info text-white' : null}>
            <td>{item.id}</td>
            <td>{item.title} &nbsp; {item.amount > 9 ? '(discount 10%)' : null} </td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
            <td>{item.amount > 9 ? (item.total * 0.9) : item.total}</td>
        </tr >
    )

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
        </div>
    )
}
