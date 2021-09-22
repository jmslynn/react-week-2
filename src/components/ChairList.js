import React, { Component } from 'react'
import ChairCard from './ChairCard'

export default class ChairList extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col d-flex">
                    { this.props.chairs.map(chair => <ChairCard key={chair.id} chair={chair} addToCart={this.props.addToCart} />)}
                </div>
            </div>
        )
    }
}
