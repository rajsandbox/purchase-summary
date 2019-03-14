import React, { Component } from 'react';

export default class ToolTip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render = ({ open } = this.state) => {
        const toolTip = open ? `show-tooltip` : `hide-tooltip`;
        return (
            <div>
                <div className={`order-summary-saving tooltip`}>
                        <span>
                        <a className={`order-summary-saving-text`} onMouseOver={() => this.setState({open : !open})} onMouseLeave={() => this.setState({open : !open})}>Pickup savings</a>
                        <span open={this.state.open} className={`order-summary-popover ` + toolTip}>Picking up your order in store helps cut cost, and we pass the saving on to you</span>
                        </span>
                    <span className={`order-summary-saving-red text-right`}>-${this.props.pickupStoreDiscount}</span>
                </div>
            </div>

        )
    }
}