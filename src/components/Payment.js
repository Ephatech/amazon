import React, { useEffect, useState } from 'react';
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios'
import {db} from './firebase'


const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret, setCLientSecret] = useState(true);

    const Navigate=useNavigate();

    useEffect( () => {


        // const getClientSecret = () => {
        //     fetch(`http://127.0.0.1:5001/fir-6ed13/us-central1/api/payments/create?total=${getBasketTotal(basket)*100}`)
        //     .then((response)=>response.json())
        //     .then((result)=>{
        //         setCLientSecret(result.data.clientSecret);
        //     })
        //     .catch(()=>{console.log("Error Here!!!");});
        // }


        const getClientSecret = async () => {
            const response = await axios({
               // method : 'post',
                url : `/payments/create?total=${getBasketTotal(basket)*100}`,
            });
            setCLientSecret(response.data.clientSecret);
            console.log("response ",response);
        };

        getClientSecret();

    }, [basket] );

    console.log("Secrete ",clientSecret);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement),
            },
        }).then(({paymentIntent}) => {

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created:paymentIntent.created,
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type : 'EMPTY_BASKET',
            });

            Navigate("/orders");
        })      

    };

    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

    return (
        <div className='payment'>
            <div className='payment-title'>
                <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
            </div>
            <div className='payment-sections-cont'>
                <div className='payment-section'>
                    <div className='payment-left'>
                        <h3>Delivery <br/> Address</h3>
                    </div>
                    <div className='payment-right'>
                        <p>{user?.email}</p>
                        <p>1234 React Street</p>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                </div>
                <div className='payment-section d-md-flex'>
                    <div className='payment-left'>
                        <h3>Recieve items <br/>and delivery</h3>
                    </div>
                    <div>
                            {
                                basket?.map((item)=>(
                                    <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}/>
                                ))
                            }
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-left'>
                        <h3>Payment <br/> Method</h3>
                    </div>
                    <div className='payment-right'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div>
                            <CurrencyFormat   
                                renderText={(value) => (
                                <h4>Order Total : {value}</h4>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                />
                                <button className='btn-buynow' disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    );
}

export default Payment;
