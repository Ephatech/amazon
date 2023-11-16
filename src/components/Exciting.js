import React from 'react';
import './Exciting.css'

const Exciting = ({img, off, discount, price, title}) => {
    return (
        <div className='exciting'>
            <div className='img-wapper'>
            <img className='exciting-img' src={img} alt=''/>
            </div>
            <div className='off-deal'>
                <button className='off'>{off} off</button>
                <p className='deal'>Deal</p>
            </div>
            <div className='price'>
                <p>{discount} List Price : <del>{price}</del></p>
            </div>
            <div className='info'>
                <p className='title'> {title}</p>
                </div>
        </div>
    );
}

export default Exciting;
