import React from 'react';
import Header from "../components/UI/Header/Header";
import CurrencyForm from "../components/CurrencyForm/CurrencyForm";
import CurrencyInfoPage from "./CurrencyInfoPage";
import ConverterInfo from "../components/ConverterInfoBlock/ConverterInfo";
import TextAndData from "../components/TextAndData/TextAndData";

const ConverterPage = () => {

    return (
        <div>
            <Header />
            <CurrencyForm
                placeholder="Введите число"
                baseText={'Выберите валюту'}
                data={["ru", "usa", 'kz', 'eu']}
            />
            <TextAndData/>
        </div>
    );
};

export default ConverterPage;