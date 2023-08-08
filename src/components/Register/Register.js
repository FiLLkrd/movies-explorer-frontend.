import React from "react";
import HeaderLogo from "../../images/HeaderLogo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Register(){
    return(
   <div className="register">
       <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="login__logo logo" />
                    </NavLink>
       <h2 className="register__title">Добро пожаловать!</h2>
       <form className="register__form">
        <label className="register__label">Имя</label>
        <input className="register__input" placeholder="Имя"/>
        <label className="register__label">E-mail</label>
        <input className="register__input" placeholder="pochta@ya.ru"/>
        <label className="register__label">Пароль</label>
        <input className="register__input" placeholder="Ваш пароль" type="password" />
        <button className="register__button">Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы?
        <Link to="/sign-in" className="register__link"> Войти</Link></p>
       </form>
   </div>
    );
}

