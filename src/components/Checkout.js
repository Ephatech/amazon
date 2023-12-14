import React from 'react';
import './Checkout.css';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div>
        <div className='checkout d-md-flex'>

            <div className='cont-left'>
                <img className='checkout-img' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
                <h3 className='hello'>Hello, {!user?'Guest' : user.email} </h3>
                <h2 className='checkout-title'>Your Shopping Basket</h2>
                
            </div>

            <div className='cont-right '>
                <SubTotal/>
            </div>

        </div>
        {basket?.map((item) => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        img = {item.img}
                        price = {item.price}
                    />
                ))}
        </div>
    );
}

export default Checkout;
