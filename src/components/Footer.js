import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='foot-cont'>
        <div className='footer row'>
            <div className='col-sm-6 col-lg-3 mx-auto'>
                <h3>Get to Know Us</h3>
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-3'>
            <h3>Make Money with Us</h3>
            <ul>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-3'>
            <h3>Amazon Payment Products</h3>
            <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-3'>
            <h3>Let Us Help You</h3>
            <ul>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div>
        <img className='footer-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </div>
        </div>
    );
}

export default Footer;
