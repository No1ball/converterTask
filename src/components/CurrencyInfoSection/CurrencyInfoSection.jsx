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
                <div className={classes.tableHeader}><td>
                    Наименование валюты
                </td>
                    <td>
                        Буквенный код
                    </td>
                    <td>
                        Значение к рублю
                    </td>
                    <td>
                        Динамика за сутки
                    </td></div>
                    <div className={tableCl(searchStr)}>
                        <CurrencyTable filtredData={filtredData}/>
                    </div>

            </div>
            :
                <div className={classes.noMatches}>Совпадения не найдены</div>
            }
        </div>
    );
};

export default CurrencyInfoSection;