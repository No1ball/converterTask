import React from 'react';
import classes from "./CurrencyTable.module.scss";

const CurrencyTable = ({filtredData}) => {
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