import React from 'react';
import classes from "./CurrencyTable.module.scss";
import {useSelector} from "react-redux";

const CurrencyTable = () => {
    const data = useSelector(state => state.currency.currencyArr)
    return (
        <table className={classes.tableCl}>
            <tr>
                <td>
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
                </td>
            </tr>
            {data.map(item => <tr>
                <td>{item.Name}</td>
                <td>{item.CharCode}</td>
                <td>{item.Value}</td>
                {item.Value > item.Previous ?
                    <td>{(item.Value - item.Previous).toFixed(4)}
                        <span className={classes.positive}>↑</span>
                    </td>

                    :
                    <td>
                        { (item.Value - item.Previous).toFixed(4)}
                    <span className={classes.negative}>↓</span>
                    </td>
                }
            </tr>)}
        </table>
    );
};

export default CurrencyTable;