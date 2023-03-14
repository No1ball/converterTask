import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import FetchData from "./API/CurrencyService";
import {initCurrency} from "./store/currencySlice";
import {store} from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));

async function getData (){
    const data = await FetchData.getCurrency();
    store.dispatch(initCurrency(Object.values(data.Valute)))
}
getData();
root.render(
    <App />
);

