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
        activePage: ''
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
        }
    },
})

export const {initCurrency, searchStrEdit} = currencySlice.actions
export default currencySlice.reducer