import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:{
        currencyArr: []
    },
    state:{
        firstValuteName: '',
        secondValuteName: '',
        firstValuteNum: 100,
        secondValuteNum: 0,
        searchStr: '',
        activePage: window.location.pathname
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
    },
})

export const {initCurrency, searchStrEdit, changeActive} = currencySlice.actions
export default currencySlice.reducer