import React, { Component } from 'react';
import RenderLineItem from './renderLineItem';

export default class Total extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coupon : '',
            couponValidity: '',
            expand : true,
            showPromo : true
        }
        this.submitPromoCode = this.submitPromoCode.bind(this);
    }

    static get defaultProps() {
        return {
            submitPromoCode: () =>{}
        }
      }

    applyPromoCode = (e, { coupon } = this.state) => {
        let couponVal = e.target.value;
        couponVal!=null ? this.setState({ coupon : couponVal }) : null;
        this.setState({couponValidity: ''});
    }

    submitPromoCode = () => {
       const {coupon} = this.state;
       let promoInfo = {
           coupon : coupon
       }
       const promResult = this.props.addPromoCode(promoInfo);
       console.log('promResult: ', promResult);
       if(promResult && promResult.promoDetails && promResult.promoDetails.promoPercent > 0){
           this.setState({couponValidity: 'Valid'});
       } else {
           this.setState({couponValidity: 'Invalid'});
       }
       this.setState({ coupon : `` });
    }

    render = ({ expand, coupon, showPromo, couponValidity } = this.state, { grandTotal, pricingData } = this.props) => {
        let showPromoClass = !showPromo ? `order-summary-on-hover` : ``;
        return (
            <div>
                <div className={`order-summary-grand-total order-summary-line`}>
                    <span className={`order-summary-hidden`}>Est. total</span>
                    <span className={`order-summary-total text-right`}>${grandTotal}</span>
                </div>

                {/* see item details */}
                <div onClick={() => this.setState({ expand : !expand })} className={`order-summary-cart`}>
                    {
                        expand ? <div> See item details + </div> :
                                 <div> Hide item details - 
                                     <div>
                                        {pricingData.map((shoppingCart, index) => {
                                           return  <RenderLineItem shoppingCart={shoppingCart} key={index}/>
                                        })}
                                     </div>
                                 </div>
                     }
                </div>


                <div>
                {
                    showPromo ? <span  onClick={() => this.setState({ showPromo : !showPromo })}   className={showPromoClass}>Apply promo code + </span> :
                                <div>
                                    <span onClick={() => this.setState({ showPromo : !showPromo })}   className={showPromoClass}>Hide promo code -</span>
                                    <div className={`order-summary-promocode`}>
                                        <input className={`order-summary-text`} onChange={e => this.applyPromoCode(e)} value={coupon} />
                                        <button onClick={this.submitPromoCode}>Apply</button>
                                        <span>
                                            {
                                                couponValidity ? <label>{couponValidity} Coupon</label>:''
                                            }
                                        </span>
                                    </div>
                                </div>
                }
                </div>
            </div>
        )
    }
}