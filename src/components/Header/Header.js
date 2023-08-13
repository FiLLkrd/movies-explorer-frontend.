import React from "react";
import HeaderLogo from "../../images/HeaderLogo.svg";
import { NavLink, useLocation } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import { useUserStore } from "../../contexts/CurrentUserContext";

import BurgerButton from "../BurgerButton/BurgerButton";

export default function Header(){
    const { user } = useUserStore();
    let { pathname } = useLocation();

    return(
        <header className="header">
            {!user ? (
                <>
                <div className="header__container">
            <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="header__logo" />
                    </NavLink>
            
                <NavBar />
                </div>
                </>
            ) : (
                <>
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
                
                </>
                )}

        </header>
    );
}

