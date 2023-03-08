import React from 'react';
import classes from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
const Header = () => {
    const data = [{text:'Курсы валют', href:'info'}, {text:'Конвертор валют', href:'converter'}, {text:'Начальная страница', href:'home'}]
    return (
        <div className={classes.headerCl}>
            <div className={classes.logoAndName}>
                <img alt='Лого' src={require('../../../603655-200.png')}/>
                TaskConvertor
            </div>
            <Navigation data={data}/>
        </div>
    );
};

export default Header;