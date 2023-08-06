import React from "react";
import HeaderLogo from "../../images/HeaderLogo.png";
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";

import BurgerButton from "../BurgerButton/BurgerButton";

export default function Header(){
    let location = useLocation();

    return(
        <>
        {(location.pathname === '/') ? (
            <header className="header">
            <div className="header__container">
            <img src={HeaderLogo} alt="Логотип" className="header__logo" />
            <NavBar />
        </div>
        </header>
        ) : (
            <header className="header header_movies">
                <div className="header__container">
                    <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="header__logo" />
                    </NavLink>
                <nav className="header__select">
                    <NavLink className="header__movies-btn" exact to="/movies">Фильмы</NavLink>
                    <NavLink className="header__movies-btn" exact to="/saved-movies">Сохраненные фильмы</NavLink>
                </nav>
                <div className="header__account">
                    <NavLink exact to='/profile' className="header__account-title">Аккаунт</NavLink>
                    <div className="header__account-icon" />
                </div>
                <BurgerButton />
                </div>
            </header>
        )}  
        </>
    );
}