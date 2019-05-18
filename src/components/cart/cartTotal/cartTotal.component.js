import React from 'react';
import Button from '../../button';

const CartTotal = ({cartItem}) => {

  const totalHandler = () => {
    const product = 
      cartItem
        .map(item => item.total)
        .reduce((a, b) => a + b)
    return product
  }
  
  return(
    <div className="cart-total">
        <div>
          <Button 
            buttonText="clear cart"/>
          <h5>Cart Total: £{totalHandler()}</h5>
        </div>
    </div>
  )
}


export default CartTotal;
