import {configureStore} from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";

export  const store = configureStore({
    reducer: {
        currency: currencySlice
    }
})