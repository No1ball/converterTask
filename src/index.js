import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import FetchData from "./API/CurrencyService";
import {changeActive, initCurrency} from "./store/currencySlice";
import {store} from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));

async function getData (){
    const data = await FetchData.getCurrency();
    store.dispatch(initCurrency(Object.values(data.Valute)))
}
store.dispatch(changeActive(window.location.pathname.slice(1)))
getData();
root.render(
    <App />
);

