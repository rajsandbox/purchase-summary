import React, { Component } from 'react';
import ToolTip from '../container/toolTip';
export default class ItemsSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render = ({ open } = this.state) => {
        return (
            <div>
                <div className={`order-summary-subtotal`}>
                        <span>Subtotal </span>
                        <span className={`Discount order-summary-price text-right`}>${this.props.subtotal}</span>
                    </div>
                    {/* Tooltip component */}
                    <ToolTip />
                    <div className={`order-summary-tax`}>
                        <span className={`order-summary-label`}>Est. taxes &amp; fees</span>
                        <span className={`Discount order-summary-price text-right`}>${this.props.tax}</span>
                    </div>
                    <div className={`order-summary-line-extension zip-line`}>
                        <span>(Based on {this.props.zip})</span>
                    </div>
            </div>
        )
    }
}