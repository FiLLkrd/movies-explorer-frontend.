import React from "react";

export default function Footer(){
    return(
    <footer className="footer">
        <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__list">
            <p className="footer__copyright">© 2023</p>
            <div className="footer__links">
            <a target="_blank" className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer">Яндекс.Практикум</a>
            <a target="_blank" className="footer__link" href="https://github.com/FiLLkrd" rel="noreferrer">Github</a>
            </div>
        </div>
        </div>
    </footer>
    );
}