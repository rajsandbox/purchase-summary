import React, { Component } from 'react';

export default class RenderLineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render = ({ shoppingCart } = this.props) => {
        return (
            <div key={`item`} className={`order-summary-cart-item`}>
                <div>
                    <div>
                        <div className={`order-summary-cart-item-details`}>{shoppingCart.itemDetails.description}</div>
                        <div className={`order-summary-cart-item-price`}>${shoppingCart.pricing.price}</div>
                    </div>
                </div>
            </div>
        );
    }
}    