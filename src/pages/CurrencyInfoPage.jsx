import React, {useEffect, useState} from 'react';
import Header from "../components/UI/Header/Header";
import CurrencyInfoSection from "../components/CurrencyInfoSection/CurrencyInfoSection";
import FetchData from "../API/CurrencyService";
import {useDispatch, useSelector} from "react-redux";
import {initCurrency} from "../store/currencySlice";

const CurrencyInfoPage = () => {
    return (
        <div>
            <Header/>
            <CurrencyInfoSection/>
        </div>
    );
};

export default CurrencyInfoPage;