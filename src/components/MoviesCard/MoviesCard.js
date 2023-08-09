import React, { useState } from 'react';
import cover from "../../images/cover.png";
import { useLocation } from 'react-router-dom';

export default function MoviesCard(){
    let location = useLocation();
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <>
        {(location.pathname === '/movies') ? (
            <li className="card">
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__name">Название</h2>
                    <p className="card__duration">1 ч 37м</p>
                </div>
                <button onClick={handleToggle} className={isActive ? "card__btn-save_active" : "card__btn-save"}></button>
            </div>
            <img className="card__image" src={cover} alt="Обложка фильма"/>
        </li>
        ) : (
<li className="card">
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__name">Название</h2>
                    <p className="card__duration">1 ч 37м</p>
                </div>
                <button className="card__delete"></button>
            </div>
            <img className="card__image" src={cover} alt="Обложка фильма"/>
        </li>
        )}
        </>
        
    );
}