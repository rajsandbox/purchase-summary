export const ADD_PROMOCODE = "ADD_PROMOCODE";

export function addPromoCode(promoCode) {
    return {
        type: ADD_PROMOCODE,
        promoDetails : {
            promoPercent: getCouponValue(promoCode.coupon),
            promoCode : promoCode.coupon
        }
       
    };
}

const getCouponValue = (couponName) => {
    switch(couponName){
        case 'DISCOUNT' : 
            return 10;
        default: 
            return 0;
    }
}