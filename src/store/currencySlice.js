import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currencyArr: [],
    firstValuteName: '',
    secondValiteName: '',
    firstValuteNum: 100,
    secondValuteNum: 0,
    searchStr: ''
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        initCurrency(state, action){
            state.currencyArr.push(...action.payload);
        },
        searchStrEdit(state, action){
            state.searchStr = action.payload;
        }
    },
})

export const {initCurrency, searchStrEdit} = currencySlice.actions
export default currencySlice.reducer