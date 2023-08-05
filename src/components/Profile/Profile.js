import React from "react";
import Header from "../Header/Header";

export default function Profile(){
    return(
        <>
        <Header />
        <section className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <form className="profile__form">
                <div className="profile__container">
                <label className="profile__label">Имя</label>
                <input className="profile__input" placeholder="Виталий"/>
                </div>
                <div className="profile__container">
                <label className="profile__label">E-mail</label>
                <input className="profile__input" placeholder="pochta@ya.ru"/>
                </div>
                <button className="profile__btn-change" type="submit">Редактировать</button>
                <button className="profile__btn-exit" type="button">Выйти из аккаунта</button>
            </form>
        </section>
        </>
    );
}