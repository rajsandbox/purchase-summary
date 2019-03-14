import React, { Component } from 'react';
import GrandTotal from '../container/total';
import OrderSummary from '../container/itemsSummary';
import './purchaseSummary.css';

export default class PurchaseSummary extends Component {
    render = () => {
        return (
            <div className={`order-summary-wrapper`}>
                <div className={`order-summary-box`}>
                    <OrderSummary />
                    <GrandTotal />
                </div> 
            </div>  
        );
    }
}