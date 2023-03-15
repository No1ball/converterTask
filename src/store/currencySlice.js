import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:{
        currencyArr: []
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
})

export const {initCurrency, searchStrEdit, changeActive, changeFirstValuteName, changeSecondValuteName, handleFirstValue, handleSecondValue} = currencySlice.actions
export default currencySlice.reducer