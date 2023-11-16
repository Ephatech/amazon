import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

    const Product = ({id, title,img, price}) => {

    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                title : title,
                img : img,
                price : price,
            },
        });
    }

    return (
        <div className='product col-sm-12 col-md-6 col-lg-3'>
            <div className='info'>
                <p className='title'> {title}</p>
                <small>${price}</small>
                </div>
            <img className='prod-img' src={img} alt=''/>
            <button className='add' onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product;
