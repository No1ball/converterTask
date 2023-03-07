import React from 'react';
import classes from "./Header.module.scss";
const Header = () => {
    return (
        <div className={classes.headerCl}>
            <span>TaskConvertor</span>
            <span>
                Курсы валют
            </span>
            <span>
                Конвертор валют
            </span>
            <span>
                Темная тема
            </span>
            <span>
                Светлая тема
            </span>
        </div>
    );
};

export default Header;