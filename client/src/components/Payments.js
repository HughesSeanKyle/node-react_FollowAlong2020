import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        
        return ( // 1
            <StripeCheckout 
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
};

export default Payments;

/*
//1 - amount={500} = $5
//2 - Token = User enters details, details to stripe, stripe sends back token (kindof like Oauth procedure) - *Note - This is a callback - It will trigger a redirect on Token Receipt. 
*/