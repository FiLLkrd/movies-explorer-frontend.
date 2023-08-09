import React from "react";
import icon from "../../images/PortfolioButton.svg";


export default function Portfolio(){
    return(
    <div className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/FiLLkrd/how-to-learn" target="_blank"
              rel="noreferrer">
                    <p className="portfolio__description">Статичный сайт</p>
                    <img className="portfolio__icon" src={icon} alt="иконка ссылки"/>
                </a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/FiLLkrd/russian-travel" target="_blank"
              rel="noreferrer">
                    <p className="portfolio__description">Адаптивный сайт</p>
                    <img className="portfolio__icon" src={icon} alt="иконка ссылки"/>
                </a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/FiLLkrd/react-mesto-api-full-gha" target="_blank"
              rel="noreferrer">
                    <p className="portfolio__description">Одностраничное приложение</p>
                    <img className="portfolio__icon" src={icon} alt="иконка ссылки"/>
                </a>
            </li>
        </ul>
    </div>
    );
}