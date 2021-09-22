import React, { Component } from 'react'

class CartItem extends Component {
    render() {
        return (
            <li className="list-group-item p-3">
                <span className="badge bg-primary rounded-pill me-1">{ this.props.item.number }</span>
                { this.props.item.text }
                <button className="btn btn-danger btn-sm float-end" 
                    onClick={ () => this.props.removeFromCart(this.props.item.id) }>-</button>
            </li>
        )
    }
}

export default class ShoppingCart extends Component {
    render() {
        const emptyCartItem = <li className="list-group-item text-muted text-center p-3">Your cart is empty</li>
        const cartItems = this.props.cart.map(item => 
            <CartItem item={item} key={item.id} removeFromCart={this.props.removeFromCart}/>
        )
        return (
            <div className="row my-3">
                <div className="col-md">
                    <ul className="list-group">
                        { (this.props.cart.length === 0) ? emptyCartItem : cartItems }
                    </ul>
                    <button className="btn btn-success btn-lg mt-3 float-end">Check Out</button>
                </div>
            </div>
        )
    }
}
