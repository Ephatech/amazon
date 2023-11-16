import React from 'react';
import'./RowEx.css'
import Exciting from './Exciting';

const RowEx = () => {
    return (
        <div>
            <div className='cont'>
                <div className='title'>
                    <h1 className='exc'>Exciting deals</h1>
                    <a className='exc-det' href='#'>See all details</a>
                </div>
                <div className='my-container'>
                <Exciting img='https://m.media-amazon.com/images/I/51tCpEDgvnL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='The Skull : A Tyrolean Folktale'/>
                
                <Exciting img='https://m.media-amazon.com/images/I/61wN6N6jnDL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='I could Nosh'/>
                <Exciting img='https://m.media-amazon.com/images/I/51YBQXmMuqL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='The inheritance games'/>
                <Exciting img='https://m.media-amazon.com/images/I/51rluNuD0BL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='The Skull : A Tyrolean Folktale'/>
                <Exciting img='https://m.media-amazon.com/images/I/51waQkrVyLL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='Standard lesson commentary'/>
                <Exciting img='https://m.media-amazon.com/images/I/51tCpEDgvnL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='The Skull : A Tyrolean Folktale'/>
                <Exciting img='https://m.media-amazon.com/images/I/61HThMPIrvL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='Brain Quest'/>
                <Exciting img='https://m.media-amazon.com/images/I/61Li7trlIcL._AC_SY200_.jpg' off='21%' discount='$15.83' price='$19.99' title='The Skull : A Tyrolean Folktale'/>
                </div>
            </div>
            
        </div>
    );
}

export default RowEx;
