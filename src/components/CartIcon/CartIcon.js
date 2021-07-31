import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/actions/cartAction';
import './CartIcon.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg';

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()) 
})

export default connect(null, mapDispatchToProps)(CartIcon);