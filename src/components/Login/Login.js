import React from "react";
import HeaderLogo from "../../images/HeaderLogo.png";
import { NavLink, Link } from "react-router-dom";

export default function Login(){
    return(
   <div className="login">
       <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="header__logo" />
                    </NavLink>
       <h2 className="login__title">Рады видеть!</h2>
       <form className="login__form">
        <label className="login__label">E-mail</label>
        <input className="login__input" />
        <label className="login__label">Пароль</label>
        <input className="login__input" />
        <button className="login__button">Войти</button>
        <p className="login__text">Еще не зарегистрированы?
        <Link to="/sign-up" className="register__link">Регистрация</Link></p>
       </form>
   </div>
    );
}