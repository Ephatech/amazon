import React from 'react';
import './SubTotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';

import { useNavigate } from 'react-router';

const SubTotal = () => {

    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => item.price + amount, 0);

    return (
        <div className='sub-total'>
            <CurrencyFormat   
            renderText={(value) => (
            <div>
                <p>Subtotal ({basket.length}) items : 
                    <strong>
                        {value}
                    </strong>
                </p>
                <small className='gift'>
                    <input type='checkbox'/>This Order contains a gift
                </small>
            </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={(e) => navigate("/payment")} className='btn-checkout'>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;

// (value) =>
//                 <div>
//                     <p>
//                         Subtotal (0 items) : <strong>0</strong>
//                     </p>
//                     <small className='subtotal-gift'>
//                         <input type='checkbbox' /> This order contains a gift
//                     </small>
//                 </div>
//             )