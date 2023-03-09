import React from 'react';
import classes from "./CurrencyTable.module.scss";
const CurrencyTable = ({data}) => {
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

            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
        </table>
    );
};

export default CurrencyTable;