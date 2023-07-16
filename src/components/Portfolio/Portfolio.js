import React from "react";
import PortfolioButton from "../../images/PortfolioButton.png";

export default function Portfolio(){
    return(
    <div className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
            <li className="portfolio__project">Статичный сайт<img src={PortfolioButton} alt="Ссылка на проект" className="portfolio__button"/></li>
            <li className="portfolio__project">Адаптивный сайт<img src={PortfolioButton} alt="Ссылка на проект" className="portfolio__button"/></li>
            <li className="portfolio__project">Одностраничное приложение<img src={PortfolioButton} alt="Ссылка на проект" className="portfolio__button"/></li>
        </ul>
    </div>
    );
}