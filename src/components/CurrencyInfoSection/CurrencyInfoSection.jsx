import React from 'react';
import CurrencyTable from "../UI/СurrencyTable/CurrencyTable";
import classes from "./CurrencyInfoSection.module.scss";
const CurrencyInfoSection = () => {
    return (
        <div className={classes.infoSectionCl}>
            <input/>
            <div className={classes.tableSection}>
                <CurrencyTable data={[]}/>
            </div>

        </div>
    );
};

export default CurrencyInfoSection;