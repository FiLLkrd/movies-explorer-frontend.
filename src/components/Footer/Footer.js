import React from "react";

export default function Footer(){
    return(
    <div className="footer">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
            <p className="footer__copyright">© 2023</p>
            <div className="footer__links">
            <p className="footer__link" src="https://practicum.yandex.ru/">Яндекс.Практикум</p>
            <p className="footer__link" src="https://github.com/FiLLkrd">Github</p>
            </div>
        </div>
    </div>
    );
}