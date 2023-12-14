import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id, title, img, price, hideButton}) => {

    const [{basket}, dispatch] = useStateValue();

const removeFromBasket = () => {
    dispatch({
        type : "REMOVE_FROM_BASKET",
        id : id,
    });
}

    return (
        <div className='checkout-prod d-md-flex'>
            <img className='checkout-prod-img' src={img}></img>
            <div className='checkout-prod-info'>
                <p className='checkout-prod-title'>{title}</p>
                <p className='checkout-prod-price'>
                    <small>$
                    <strong>{price}</strong></small>
                </p>
                {!hideButton &&(<button onClick={removeFromBasket}>Remove from Basket</button>)}{''}
            </div>
        </div>
    );
}

export default CheckoutProduct;
