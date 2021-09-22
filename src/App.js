import React, { Component } from 'react'
import ChairList from './components/ChairList'
import ShoppingCart from './components/ShoppingCart'
import { CHAIRS } from './shared/data'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            chairs: CHAIRS
        }
    }

    handleAddToCart = (id) => {
		// We give setState a function because we're updating the data based on what it currently is
		this.setState(state => {
			let item = state.cart.find(i => i.id === id);
			let cart;
			if(!item) {
				// adding a new item to an array
				const chair = state.chairs.find(c => c.id === id);
				item = { id, text: chair.title, number: 1 };
				cart = state.cart.concat([ item ]);
			}
			else {
				// changing the properties of one item in an array
				const itemIndex = state.cart.indexOf(item);
				cart = [ ...state.cart ];
				cart[itemIndex] = { ...item, number: item.number + 1};
			}
			return { cart };
		})
	}

    handleRemoveFromCart = (id) => {
		// We give setState a function because we're updating the data based on what it currently is
		this.setState(state => {
			const item = state.cart.find(i => i.id === id);
			let cart = [];
			if(item.number === 1) {
				// removing an item from an array
				cart = state.cart.filter(i => i.id !== id);
			}
			else {
				// changing the properties of one item in an array
				const itemIndex = state.cart.indexOf(item);
				cart = [ ...state.cart ];
				cart[itemIndex] = { ...item, number: item.number - 1};
			}
			return { cart };
		})
		
    }

    render() {
        return (
            <div className="container">
                <ChairList chairs={this.state.chairs} addToCart={this.handleAddToCart} />
                <ShoppingCart cart={this.state.cart} removeFromCart={this.handleRemoveFromCart}/>
            </div>
        )
    }
}