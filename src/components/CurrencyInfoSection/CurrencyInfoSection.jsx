import React, {useEffect, useState} from 'react';
import CurrencyTable from "../UI/СurrencyTable/CurrencyTable";
import classes from "./CurrencyInfoSection.module.scss";
import SearchSection from "../SearchSection/SearchSection";
import {useSelector} from "react-redux";
const CurrencyInfoSection = () => {
    const data = useSelector(state => state.currency.currencyArr)
    const searchStr = useSelector(state => state.currency.searchStr)
    const [filtredData, setFiltredData] = useState([...data])

    useEffect( ()=>{
        setFiltredData([...data.filter(item => item.Name.toLowerCase().startsWith(searchStr.toLowerCase()))])
    }, [searchStr, data])
    return (
        <div className={classes.infoSectionCl}>
            <SearchSection>Справочник валют</SearchSection>
            {filtredData.length ?
            <div className={classes.tableSection}>
                <CurrencyTable filtredData={filtredData}/>
            </div>
            :
                <div className={classes.noMatches}>Совпадения не найдены</div>
            }
        </div>
    );
};

export default CurrencyInfoSection;