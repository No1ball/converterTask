import React from 'react';
import Header from "../components/UI/Header/Header";
import CurrencyForm from "../components/CurrencyForm/CurrencyForm";

const ConverterPage = () => {
    return (
        <div>
            <Header />
            <span>
            Конвертер валют онлайн — инструмент,
            который позволит вам рассчитать соотношения актуальных курсов денежных средств всего мира на сегодня.
          </span>
            <CurrencyForm
                placeholder="Введите число"
                baseText={'Выберите валюту'}
                data={["ru", "usa", 'kz']}
            />
        </div>
    );
};

export default ConverterPage;