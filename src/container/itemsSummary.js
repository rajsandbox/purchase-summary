import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemsSummary from '../purchase-summary/itemsSummary';
import {getSubtotal, getPickupStoreDiscountTotal, getZip, getTax} from '../util/utils'

const mapStateToProps = state => ({
   subtotal: getSubtotal(state.pricingData),
   pickupStoreDiscount:  getPickupStoreDiscountTotal(state.pricingData),
   zip: getZip(state.pricingData),
   tax: getTax(state.pricingData)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsSummary);