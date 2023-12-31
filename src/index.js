import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './components/Reducer';
import {StateProvider} from './components/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
  </BrowserRouter>
);

