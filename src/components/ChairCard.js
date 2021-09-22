import React, { Component } from 'react'

export default class ChairCard extends Component {
    render() {
        return (
            <div className="card mb-3 mx-2 w-25">
                <img src={this.props.chair.image} className="card-image-top" alt={this.props.chair.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.chair.title}</h5>
                    <p className="card-text">{this.props.chair.description}</p>
                    <button className="btn btn-primary" onClick={ () => this.props.addToCart(this.props.chair.id) }>
                        Add to Cart
                    </button> 
                </div>
            </div>
        )
    }
}
