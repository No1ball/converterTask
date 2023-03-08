import React from 'react';
import Header from "../components/UI/Header/Header";
import CurrencyForm from "../components/CurrencyForm/CurrencyForm";
import CurrencyInfoPage from "./CurrencyInfoPage";
import ConverterInfo from "../components/ConverterInfoBlock/ConverterInfo";

const ConverterPage = () => {
    return (
        <div>
            <Header />
            <CurrencyForm
                placeholder="Введите число"
                baseText={'Выберите валюту'}
                data={["ru", "usa", 'kz']}
            />
            <ConverterInfo/>
        </div>
    );
};

export default ConverterPage;