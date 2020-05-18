import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Items from './components/Items';
import Result from './components/Result';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [{
                id: 1,
                title: 'Pizza',
                price: 15,
                amount: 0,
                total: 0
            },
            {
                id: 2,
                title: 'Burger',
                price: 5,
                amount: 0,
                total: 0
            }, {
                id: 3,
                title: 'Coca',
                price: 3,
                amount: 0,
                total: 0
            }],
            selectItem: []
        }
    }
    add = (id) => {
        let items = [...this.state.items]
        items[id].amount = items[id].amount + 1
        items[id].total = items[id].amount * items[id].price
        this.setState({
            items
        })
    }
    delete = (id) => {
        let items = [...this.state.items]
        items[id].amount = items[id].amount - 1
        items[id].total = items[id].amount * items[id].price
        this.setState({
            items
        })
    }
    selectItems = () => {
        let items = this.state.items.filter((item) => item.amount > 0)
        return items
    }
    render() {
        return (
            <div>
                <Menu />
                <Items items={this.state.items} onAdd={this.add} onDelete={this.delete} />
                <Result items={this.selectItems()} />

            </div>
        )
    }
}
