import React from "react";
import 'normalize.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";
import Header from "./components/UI/Header/Header";
function App() {
  return (
      <div className="App">
        <Header data={['Курсы валют', 'Конвертор валют']}/>
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
}

export default App;
