import React from "react";
import 'normalize.css';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ConverterPage from "./pages/ConverterPage";
import CurrencyInfoPage from "./pages/CurrencyInfoPage";
import Home from "./pages/Home";
function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path={'/converter'} element={<ConverterPage/>}/>
                <Route path={'/info'} element={<CurrencyInfoPage/>}/>
                <Route path={'/home'} element={<Home/>} />
                <Route path={'/*'} element={<Navigate to={'/home'} replace/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
