import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ToolTip from '../purchase-summary/toolTip';
import {getSubtotal,getPickupStoreDiscountTotal } from '../util/utils'

const mapStateToProps = state => ({
   subtotal: getSubtotal(state.pricingData),
   pickupStoreDiscount:  getPickupStoreDiscountTotal(state.pricingData)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolTip);