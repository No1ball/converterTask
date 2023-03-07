import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const initialState = {
    currency: [],
    fromCurrency: '',
    toCurrency: ''
}
const currencyAdapter = createEntityAdapter();

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        initCurrency: currencyAdapter.addMany
    },
})

export default currencySlice