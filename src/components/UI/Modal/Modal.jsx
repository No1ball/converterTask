import React, {useState} from 'react';
import classes from "./Modal.module.scss";
import {useSelector} from "react-redux";
const Modal = ({fullData, lastSelect}) => {
    const [data, setData] = useState(fullData.filter(item => item.CharCode.localeCompare('RUB') !== 0
        && item.CharCode.localeCompare('USD') !== 0
        && item.CharCode.localeCompare('EUR') !== 0
        )
    )
    const flags = useSelector(state => state.currency.data.flags)

    return (
        <div className={classes.modal}>

                {data.map( (item ,i)=>
                    <span key={i} className={classes.content} >
                        <span onClick={lastSelect}>{item.CharCode}</span> <span className={classes.flag}>{flags.filter(
                            item2 => item2.CharCode.localeCompare(item.CharCode)===0
                    )[0].emoji.emoji}</span>
                    </span>
                )}

        </div>
    );
};

export default Modal;