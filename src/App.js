import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Commom from './components/Commom'
import Home from './components/Home';
import Checkout from './components/Checkout';
import Error from './components/Error';
import Signin from './components/Signin';
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders';
const promise = loadStripe("pk_test_51O0MSfFMKID6UmHhy7DyQMEVTi62bUftn2oTB718qSthBnBWTMPtK72D0RqL377bMuSd55K07JvNvlpNKyYZb6rW00uLlHTYfY");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser,
        });
      } else{
        dispatch({
          type : 'SET_USER',
          user : null,
        });
      }
    });
  }, []);

  return ( 
    <div className="App">
    <Routes>
        <Route path='/' element={<Commom/>}>

          <Route path='/' element={<Home/>}/>    
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/payment' element={
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          }/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>  
    </Routes>
    </div>
  );
}

export default App;
