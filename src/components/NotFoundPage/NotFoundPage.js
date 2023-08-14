import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage(){
    const navigate = useNavigate();

    return(
        <div className="not-found">
        <div>
            <h1 className="not-found__title">404</h1>
            <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <button onClick={() => navigate(-1)} className="not-found__button">Назад</button> 
    </div>
    );
}