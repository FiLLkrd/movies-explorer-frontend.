import React from "react";

export default function Promo(){
    return(
    <div className="promo">
        <div className="promo__discription">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className="promo__button">Узнать больше</button>
        </div>
        <div className="promo__image"></div>
    </div>
    );
}