import React, {useEffect, useState} from 'react';
import CurrencyTable from "../UI/СurrencyTable/CurrencyTable";
import classes from "./CurrencyInfoSection.module.scss";
import SearchSection from "../SearchSection/SearchSection";
import {useSelector} from "react-redux";
const CurrencyInfoSection = () => {
    const data = useSelector(state => state.currency.data.currencyArr)
    console.log(data)
    const searchStr = useSelector(state => state.currency.state.searchStr)
    /*useMemo*/
    const [filtredData, setFiltredData] = useState([...data])
    console.log(data[0])
    /*add useMemo*/
    useEffect( ()=>{
        setFiltredData([...data.filter(item => item.CharCode !== 'RUB' && item.Name.toLowerCase().startsWith(searchStr.toLowerCase()))])
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