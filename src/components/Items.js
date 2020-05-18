import React, { Component } from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap';
export default class Items extends Component {

    render() {
        let items = this.props.items.map((item) => <Item key={item.id} item={item} onAdd={this.props.onAdd} onDelete={this.props.onDelete} />
        )
        return (
            <Container>
                <div className=" row">
                    {items}
                </div>
            </Container>
        )
    }
}
