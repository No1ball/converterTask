import React from "react";
import 'normalize.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";
function App() {
  return (
      <div className="App">
        <CurrencyForm
            placeholder="Введите число"
            baseText={'Выберите валюту'}
            data={["ru", "usa", 'kz']}
        />
      </div>
  );
}

export default App;
