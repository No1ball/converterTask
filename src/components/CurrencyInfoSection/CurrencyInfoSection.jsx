import React, {useEffect, useState} from 'react';
import CurrencyTable from "../UI/СurrencyTable/CurrencyTable";
import classes from "./CurrencyInfoSection.module.scss";
import SearchSection from "../SearchSection/SearchSection";
import {useSelector} from "react-redux";
const CurrencyInfoSection = () => {
    const data = useSelector(state => state.currency.data.currencyArr)
    const flags = useSelector(state => state.currency.data.flags)
    const searchStr = useSelector(state => state.currency.state.searchStr)
    /*useMemo*/
    const [filtredData, setFiltredData] = useState([...data])
    const [filtredFlags, setFiltredFlags] = useState([...flags])
    /*add useMemo*/
    useEffect( ()=>{
        setFiltredData([...data.filter(item =>
            item.CharCode !== 'RUB' && item.Name.toLowerCase().startsWith(searchStr.toLowerCase())
        )])
        setFiltredFlags([...flags.filter(item => item.CharCode !== 'RUB')])
    }, [searchStr, data])
    const tableSectionCl = (len) =>{
        if (len){
            return  classes.heightAuto;
        }else{
            return  classes.heightFixed;
        }
    }
    const tableCl = (len) =>{
        if (len){
            return  classes.tableClAuto;
        }else{
            return  classes.tableCl;
        }
    }
    return (
        <div className={classes.infoSectionCl}>
            <SearchSection>Справочник валют</SearchSection>
            {filtredData.length ?
            <div className={tableSectionCl(searchStr.length)}>
                <div className={classes.tableHeader}><div>
                    Наименование валюты
                </div>
                    <div>
                        Буквенный код
                    </div>
                    <div>
                        Значение к рублю
                    </div>
                    <div>
                        Динамика за сутки
                    </div></div>
                    <div className={tableCl(searchStr)}>
                        <CurrencyTable filtredData={filtredData} flags={filtredFlags}/>
                    </div>

            </div>
            :
                <div className={classes.noMatches}>Совпадения не найдены</div>
            }
        </div>
    );
};

export default CurrencyInfoSection;