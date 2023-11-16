import React, { useEffect } from 'react';
// import './bootstrap.css'
import './Home.css';
import Product from './Product';
import RowEx from './RowEx';

const Home = () => {

    const mySrc = ["https://m.media-amazon.com/images/I/51RPiINhM7L._SX1500_.jpg", "https://m.media-amazon.com/images/I/61OdzZqmXyL._SX1500_.jpg", "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg", "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg", "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"];

    // ,"https://m.media-amazon.com/images/I/51RPiINhM7L._SX1500_.jpg", "https://m.media-amazon.com/images/I/61OdzZqmXyL._SX1500_.jpg", "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg", "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg", "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg", "https://m.media-amazon.com/images/I/81cI9lMqIoL._AC_UL320_.jpg"

    // var i = 0;

    // useEffect(()=>{
    //     const banner = () =>{
    //     document.getElementById("slide").setAttribute("src", mySrc[4]);
    //     }
        
    //     if(i=4){
    //         i=0;
    //     }
    //     else{
    //         i++;
    //     }

    //     setInterval(banner,2);

    // });

    return (
        <div className='main-cont'>
            <div className='home'>
                <br/><br/>
                <img id='slide' className='home-img' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"/>
            </div>
            <div className='my-row row'>
                <Product id="1" title='Play-Doh Modeling Compound 10-Pack Case of Colors, Perfect for Halloween Treat Bags, Non-Toxic. Cans, 2+, Multicolor.' img='https://m.media-amazon.com/images/I/81cI9lMqIoL._AC_UL320_.jpg' price={100}/>
                <Product id="2" title='Roblox Digital Gift Code for 2,200 Robux [Redeem Worldwide - Includes Exclusive Virtual Item] [Online Game Code]' img='https://m.media-amazon.com/images/I/71FE4-P8hwL._AC_UL320_.jpg' price={135}/>
                <Product id="3" title='CAROTE 7pcs Pots and Pans Set, Induction Kitchen Cookware Sets Non Stick with Removable Handle, RV Cookware Set, Oven Safe' img='https://m.media-amazon.com/images/I/51qJYFaOnUL._AC_UL320_.jpg' price={320}/>
                <Product id="4" title='SAMSUNG Galaxy Watch 5 Pro 45mm Bluetooth Smartwatch, Health, Fitness and Sleep Tracker, Sapphire Crystal Glass, GPS Route Tracking, Black' img='https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_UL320_.jpg' price={319}/>
            </div>

            <RowEx/>

            <div className='my-row row'>
                <Product id ='5' title='Motorola Moto G Stylus 5G | 2021 | 2-Day Battery | Unlocked | Made for US 4/128GB | 48MP Camera | Cosmic Emerald' img='https://m.media-amazon.com/images/I/51bfhhUKhTL._AC_UY218_.jpg' price={1270}/>
                <Product id='6' title='2022 HP Pavilion 17.3 inch IPS FHD Laptop, Intel Core i5-1135G7, Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Backlit Keyboard, Long Battery Life' img='https://m.media-amazon.com/images/I/71fqAr6E5wL._AC_UY218_.jpg' price={2000}/>
                <Product id='7' title='Gildan Ultra Cotton Long Sleeve T-Shirt, Style G2400, Multipack Safety Colors and Heathers: 50% Cotton, 50% Polyester' img='https://m.media-amazon.com/images/I/715bY3uEYgL._AC_UL320_.jpg' price={34}/>
                <Product id='8' title='COMELY Convertible Laptop Backpack Crossbody Bag Travel Bag Bookbag Diaper Bag for Work College ,7132-Red' img='https://m.media-amazon.com/images/I/71aydmrvmwL._AC_UL320_.jpg' price={67}/>
                
                
            </div>

            <RowEx/>

            <div className='my-row row'>
                <Product id ='5' title='Motorola Moto G Stylus 5G | 2021 | 2-Day Battery | Unlocked | Made for US 4/128GB | 48MP Camera | Cosmic Emerald' img='https://m.media-amazon.com/images/I/51bfhhUKhTL._AC_UY218_.jpg' price={1270}/>
                <Product id='6' title='2022 HP Pavilion 17.3 inch IPS FHD Laptop, Intel Core i5-1135G7, Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Backlit Keyboard, Long Battery Life' img='https://m.media-amazon.com/images/I/71fqAr6E5wL._AC_UY218_.jpg' price={2000}/>
                <Product id='7' title='Gildan Ultra Cotton Long Sleeve T-Shirt, Style G2400, Multipack Safety Colors and Heathers: 50% Cotton, 50% Polyester' img='https://m.media-amazon.com/images/I/715bY3uEYgL._AC_UL320_.jpg' price={34}/>
                <Product id='8' title='COMELY Convertible Laptop Backpack Crossbody Bag Travel Bag Bookbag Diaper Bag for Work College ,7132-Red' img='https://m.media-amazon.com/images/I/71aydmrvmwL._AC_UL320_.jpg' price={67}/>
                
                
            </div>

        </div>
    );
}

export default Home;
