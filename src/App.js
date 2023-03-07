import React from "react";
import 'normalize.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";
import Header from "./components/Header/Header";
function App() {
  return (
      <div className="App">
        <Header/>
        <CurrencyForm
            placeholder="Введите число"
            baseText={'Выберите валюту'}
            data={["ru", "usa", 'kz']}
        />
      </div>
  );
}

export default App;
