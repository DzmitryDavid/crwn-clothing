import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';


const CartDropdown = ({cartItems}) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem 
          key={item.id}
          item={item}/>
      ))}
      </div>
        <CustomButton inverted>Go to Checkout</CustomButton>
    </div>
  )
}
const mapStateToProps = (state) => (
  {cartItems: state.cart.cartItems}
)
export default connect(mapStateToProps)(CartDropdown);
