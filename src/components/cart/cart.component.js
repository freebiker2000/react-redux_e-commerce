import React from 'react'
import { connect } from 'react-redux'
import Title from '../title';
import { CartStyle } from './cart.style';
import CartColumns from './cartColumns';
import CartQuantity from './cartQuantity';
import { IncrementAction, DecrementAction, ClearCartAction, RemoveItemAction } from '../home/home.action';
import { RemoveItemIcon } from '../../asset/icons';
import CartTotal from './cartTotal/cartTotal.component';

const Cart = ({cartItem, increment, decrement, clearCart, removeItem}) => {
  if(!cartItem.length) {
    return <Title title="your cart is empty"/>
  } else{
    return(
      <div>
        <Title title="your cart"/>
        <CartColumns />
        {cartItem.map(({title, id, img, price, count, total}) => {
          return(
            <CartStyle key={id}>
              <img src={img} alt="ProducImage"/>
              <p>{title}</p>
              <p>£: {price}</p>
              <CartQuantity 
                count={count}
                decrement={() => decrement(id)}
                increment={() => increment(id)}
              />
              <RemoveItemIcon removeItem={() => removeItem(id)}/>
              <p>Item Total: £{total}</p>
            </CartStyle>
          )
        })}
          <CartTotal 
            cartItem={cartItem}
            clearCart={() => clearCart()}
          />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  cartItem: state.CartReducer
})

const mapDispachToProps = dispach => ({
  increment: id => dispach(IncrementAction(id)),
  decrement: id => dispach(DecrementAction(id)),
  clearCart: () => dispach(ClearCartAction()),
  removeItem: id => dispach(RemoveItemAction(id))
})

export default connect(mapStateToProps, mapDispachToProps)(Cart)