import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import store from '../Store';
import { Button } from "reactstrap";


class Payments extends Component {
  render() {
    // console.log(this.props.price)
    return (
      <StripeCheckout
        name= "GYMIFY"
        amount={this.props.price * 100}
        currency = 'INR'
        token={token => store.dispatch({type : 'SET_TOKEN' , payload : token})}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button color="success" className="m-2">
          Payments
        </Button>
      </StripeCheckout >
       
     
    );
  }
}

export default connect()(Payments);
