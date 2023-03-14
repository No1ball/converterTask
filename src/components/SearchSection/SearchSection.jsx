import React from 'react';
import classes from "./SearchSection.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {searchStrEdit} from "../../store/currencySlice";

const SearchSection = ({children}) => {
    const inpValue = useSelector(state => state.currency.state.searchStr)
    const dispatch = useDispatch();

    const inputHandler = (event) =>{
        dispatch(searchStrEdit(event.target.value))
    }
    return (
        <div className={classes.divCl}>
            <div className={classes.childrenElem}>{children}</div>
            <input className={classes.inpCl} placeholder='Название валюты' type='text' value={inpValue} onChange={inputHandler}/>
        </div>
    );
};

export default SearchSection;