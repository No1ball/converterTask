import React from 'react';
import Header from "../components/UI/Header/Header";
import CurrencyForm from "../components/CurrencyForm/CurrencyForm";
import TextAndData from "../components/TextAndData/TextAndData";


const ConverterPage = () => {

    return (
        <div>
            <Header />
            <CurrencyForm
                placeholder="Введите число"
                baseText={'Выберите валюту'}
            />
            <TextAndData/>
        </div>
    );
};

export default ConverterPage;