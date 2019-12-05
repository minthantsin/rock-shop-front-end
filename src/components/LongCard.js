import React, { Component } from 'react';

export class LongCard extends Component {

    render() {
        return (<>
            <li>
                {<img src={this.props.cartItem.image_url} alt={this.props.cartItem.name} width="75px"/>}
                {this.props.cartItem.name}
                ${this.props.cartItem.price}
                Quantity: {this.props.cartItem.quantity}
            </li>
            </>
        )
    }
}

export default LongCard;
