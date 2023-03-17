import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import FetchData from "../API/CurrencyService";
import countryFlagEmoji from "country-flag-emoji";
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
        status: '',
        flags: [
            {CharCode:'AUD',emoji:countryFlagEmoji.get("AU")},
            {CharCode:'AZN', emoji:countryFlagEmoji.get("AZ")},
            {CharCode:'GBP', emoji:countryFlagEmoji.get("GB")},
            {CharCode:'AMD',emoji:countryFlagEmoji.get("AM")},
            {CharCode:'BYN',emoji:countryFlagEmoji.get("BY")}, {CharCode:'BGN',emoji:countryFlagEmoji.get("BG")},
            {CharCode:'BRL',emoji:countryFlagEmoji.get("BR")}, {CharCode:'HUF',emoji:countryFlagEmoji.get("HU")},
            {CharCode:'VND',emoji:countryFlagEmoji.get("VN")}, {CharCode:'HKD',emoji:countryFlagEmoji.get("HK")},
            {CharCode:'GEL',emoji:countryFlagEmoji.get("GE")}, {CharCode:'DKK',emoji:countryFlagEmoji.get("DK")},
            {CharCode:'AED',emoji:countryFlagEmoji.get("AE")}, {CharCode:'USD',emoji:countryFlagEmoji.get("US")},
            {CharCode:'EUR',emoji:countryFlagEmoji.get("EU")}, {CharCode:'EGP',emoji:countryFlagEmoji.get("EG")},
            {CharCode:'INR',emoji:countryFlagEmoji.get("IN")}, {CharCode:'IDR',emoji:countryFlagEmoji.get("ID")},
            {CharCode:'KZT',emoji:countryFlagEmoji.get("KZ")}, {CharCode:'CAD',emoji:countryFlagEmoji.get("CA")},
            {CharCode:'QAR',emoji:countryFlagEmoji.get("QA")}, {CharCode:'KGS',emoji:countryFlagEmoji.get("KG")},
            {CharCode:'CNY',emoji:countryFlagEmoji.get("CN")}, {CharCode:'MDL',emoji:countryFlagEmoji.get("MD")},
            {CharCode:'NZD',emoji:countryFlagEmoji.get("NZ")}, {CharCode:'NOK',emoji:countryFlagEmoji.get("NO")},
            {CharCode:'PLN',emoji:countryFlagEmoji.get("PL")}, {CharCode:'RON',emoji:countryFlagEmoji.get("RO")},
            {CharCode:'XDR',emoji:'-'},                                    {CharCode:'SGD',emoji:countryFlagEmoji.get("SG")},
            {CharCode:'TJS',emoji:countryFlagEmoji.get("TJ")}, {CharCode:'THB',emoji:countryFlagEmoji.get("TH")},
            {CharCode:'TRY',emoji:countryFlagEmoji.get("TR")}, {CharCode:'TMT',emoji:countryFlagEmoji.get("TM")},
            {CharCode:'UZS',emoji:countryFlagEmoji.get("UZ")}, {CharCode:'UAH',emoji:countryFlagEmoji.get("UA")},
            {CharCode:'CZK',emoji:countryFlagEmoji.get("CZ")}, {CharCode:'SEK',emoji:countryFlagEmoji.get("SE")},
            {CharCode:'CHF',emoji:countryFlagEmoji.get("CH")}, {CharCode:'RSD',emoji:countryFlagEmoji.get("RS")},
            {CharCode:'ZAR',emoji:countryFlagEmoji.get("ZA")}, {CharCode:'KRW',emoji:countryFlagEmoji.get("KR")},
            {CharCode:'JPY',emoji:countryFlagEmoji.get("JP")}, {CharCode: 'RUB', emoji:countryFlagEmoji.get("RU")}
        ]
    },
    state:{
        firstValuteName: '',
        secondValuteName: '',
        valueFirst: 100,
        valueSecond: 0,
        searchStr: '',
        activePage: window.location.pathname,
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

export const {searchStrEdit, changeActive, changeFirstValuteName, changeSecondValuteName,
              handleFirstValue, handleSecondValue} = currencySlice.actions
export default currencySlice.reducer