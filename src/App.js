import React, {useEffect} from "react";
import 'normalize.css';
import './App.css'
import {Provider} from 'react-redux'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ConverterPage from "./pages/ConverterPage";
import CurrencyInfoPage from "./pages/CurrencyInfoPage";
import {store} from "./store";
import {fetchCurrency} from "./store/currencySlice";
function App() {
    useEffect(()=>{
        store.dispatch(fetchCurrency())
    }, [])
  return (
     <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={'/converter'} element={<ConverterPage/>}/>
                <Route path={'/info'} element={<CurrencyInfoPage/>}/>
                <Route path={'/*'} element={<Navigate to={'/info'} replace/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
