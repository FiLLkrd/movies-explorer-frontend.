import React from "react";

export default function Promo(){
    return(
        <section className="promo">
            <div className="promo__container">
                <div className="promo__discription">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <div className="promo__button">
                            <a target="_blank"  href="https://practicum.yandex.ru/frontend-developer/?from=catalog" rel="noreferrer" className="promo__link">
                                <p>Узнать больше</p>
                            </a>
                    </div>
                </div>
                <div className="promo__image"></div>
            </div>
        </section>
    
    );
}