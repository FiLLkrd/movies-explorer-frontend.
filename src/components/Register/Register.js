import React from "react";
import HeaderLogo from "../../images/HeaderLogo.png";
import { NavLink, Link } from "react-router-dom";

export default function Register(){
    return(
   <div className="register">
       <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="header__logo logo" />
                    </NavLink>
       <h2 className="register__title">Добро пожаловать!</h2>
       <form className="register__form">
        <label className="register__label">Имя</label>
        <input className="register__input" />
        <label className="register__label">E-mail</label>
        <input className="register__input" />
        <label className="register__label">Пароль</label>
        <input className="register__input" />
        <button className="register__button">Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы?
        <Link to="/sign-in" className="register__link"> Войти</Link></p>
       </form>
   </div>
    );
}

