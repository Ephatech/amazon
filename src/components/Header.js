import React from 'react';
import './Header.css';
import './bootstrap.css'
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {

    
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
    <div className='myheader'>
                <Link to='/'>
                <img className='logo-img' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon'/>
                </Link>


                <div className='search d-none d-lg-flex'>
                    <div >
                        <input className='search-bar' type='text' placeholder='Search Amazon'/>
                    </div>

                    <div >
                        <SearchIcon className='search-icon'/>
                    </div>
                </div>
               
                <div className='sign-in'>
                    <span className='fade-text'>Hello, {!user? 'Guest' : user.email}
                    </span><br/>
                    <span className='not-fade' onClick={handleAuthentication}><Link className='link' to={!user && '/signin'}>{user? 'Sign Out' : 'Sign In'}</Link></span>
                </div>

                
                    <Link  className='clear' to='/orders'>
                    <div className='returns'>
                    <span className='fade-text-orders'>Returns </span><br/>
                    <span className='not-fade-orders'>& Orders</span>
                    </div>
                    </Link> 
                

                <Link className='clear' to='/checkout'>
                <div className='cart'>
                    <div className='cart-icon'>
                        <ShoppingCartIcon/>{basket.length}
                    </div>
                </div></Link>
                
            </div>  
    );
}

export default Header;