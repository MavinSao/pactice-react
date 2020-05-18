import { Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export default class componentName extends Component {

    render() {
        return (
            <div className="col-md-4">
                <Card >
                    <Card.Img variant="top" src="https://image.freepik.com/free-photo/delicious-fresh-pizza-served-wooden-table_127657-159.jpg" />
                    <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text>
                            Price : {this.props.item.price} $ <br />
                            Amount : {this.props.item.amount}
                        </Card.Text>
                             Total : {this.props.item.total}$
                    <Button variant="primary" className="mx-2" onClick={() => this.props.onAdd(this.props.item.id - 1)}>Add</Button>
                        <Button variant="danger" disabled={this.props.item.amount === 0 ? true : false} onClick={() => { this.props.onDelete(this.props.item.id - 1) }}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

