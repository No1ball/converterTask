import React from 'react';
import classes from "./CurrencyTable.module.scss";

const CurrencyTable = ({filtredData, flags}) => {
    const classCalc = (i) =>{
        if( i % 2 === 0) {
            return classes.even
        }
        return classes.notEven
    }
    return (
        <table className={classes.tableCl}>
            {filtredData.map( (item,i) => <tr className={classCalc(i)} key={i}>
                <td>{item.Name}</td>
                <td>{flags.filter(
                    item2 => item2.CharCode.localeCompare(item.CharCode)===0
                )[0].emoji.emoji} {item.CharCode} </td>
                <td>{(item.Value/item.Nominal).toFixed(4)}</td>
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