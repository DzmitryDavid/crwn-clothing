import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import {addCartItem} from '../../redux/actions/cartAction';
import {connect} from 'react-redux';

import './CollectionItem.scss';

const CollectionItem = ({item, addCartItem,}) => {
  const {name, price, imageUrl} = item;
    return (

    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addCartItem(item)} inverted >Add to Cart</CustomButton>
    </div>
    )
  }
  const mapDispatchToProps = (dispatch) => ({
    addCartItem: (item) => dispatch(addCartItem(item))
  })

export default connect(null, mapDispatchToProps)(CollectionItem);  