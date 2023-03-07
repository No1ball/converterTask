import {configureStore, createStore} from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";

export  const store = configureStore({
    currency: currencySlice
})