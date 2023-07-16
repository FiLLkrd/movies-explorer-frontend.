import React from "react";
import HeaderLogo from "../../images/HeaderLogo.png";

export default function Header(){
    return(
    <div className="header">
            <img src={HeaderLogo} alt="Логотип" className="header__logo" />
            <div className="header__auth">
            <button className="header__button">Регистрация</button>
            <button className="header__button">Войти</button>
            </div>
        </div>
    );
}