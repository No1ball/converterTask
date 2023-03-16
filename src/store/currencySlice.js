import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import FetchData from "../API/CurrencyService";

export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    async function(){
        const response = await FetchData.getCurrency();
        return response.Valute
    }
)

const initialState = {
    data:{
        currencyArr: [],
        status: ''
    },
    state:{
        firstValuteName: '',
        secondValuteName: '',
        valueFirst: 100,
        valueSecond: 0,
        searchStr: '',
        activePage: window.location.pathname,
        lastValute: 'KZT'
    }
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        initCurrency(state, action){
            state.data.currencyArr.push(...action.payload);
        },
        searchStrEdit(state, action){
            state.state.searchStr = action.payload;
        },
        changeActive(state, action){
            state.state.activePage = action.payload
        },
        changeFirstValuteName(state, action){
            state.state.firstValuteName = action.payload
        },
        changeSecondValuteName(state, action){
            state.state.secondValuteName = action.payload
        },
        handleFirstValue(state, action){
            state.state.valueFirst = action.payload
        },
        handleSecondValue(state, action){
            state.state.valueSecond = action.payload
        },
        changeLastValute(state, action){
            state.state.lastValute = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrency.pending, (state, action) =>{
            state.data.status = 'loading'
        })
        builder.addCase(fetchCurrency.fulfilled, (state, action) =>{
            state.data.status = 'resolve';
            state.state.firstValuteName = 'RUB';
            state.state.secondValuteName = 'USD';
            state.state.activePage = window.location.pathname.slice(1) || 'info'
            state.data.currencyArr = Object.values(action.payload)
            state.data.currencyArr.push({CharCode:'RUB', Value:1, Nominal:1})
        })
    }
})

export const {initCurrency, searchStrEdit, changeActive, changeFirstValuteName, changeSecondValuteName, handleFirstValue, handleSecondValue} = currencySlice.actions
export default currencySlice.reducer