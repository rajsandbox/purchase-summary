import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addPromoCode } from '../actions';
import Total from '../purchase-summary/total.js';
import {getGrandTotal } from '../util/utils'

const mapStateToProps = state => ({
    pricingData : state.pricingData,
    grandTotal : getGrandTotal(state.pricingData, 8.92, state.AppliedPromos)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addPromoCode
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Total);