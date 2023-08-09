import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



export default function Navigation(props){
    const { isOpen, isClose } = props;

    return(
        <section className={`navigation ${isOpen ? "navigation_active" : "null"}`}>
            <div className="navigation__container">
                <button className="navigation__close-btn" onClick={isClose} />
                <div className="navigation__links">
                <nav className="navigation__menu">
                    <NavLink to="/" className="navigation__link">Главная</NavLink>
                    <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                    <NavLink to="/profile" className="navigation__link">Аккаунт
                    <div className="navigation__account-icon" />
                    </NavLink>
                </nav>
                </div>
            </div>
        </section>
    );
}
