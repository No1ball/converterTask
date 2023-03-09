import React from "react";
import 'normalize.css';
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ConverterPage from "./pages/ConverterPage";
import CurrencyInfoPage from "./pages/CurrencyInfoPage";
function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path={'/converter'} element={<ConverterPage/>}/>
                <Route path={'/info'} element={<CurrencyInfoPage/>}/>
                <Route path={'/*'} element={<Navigate to={'/info'} replace/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
