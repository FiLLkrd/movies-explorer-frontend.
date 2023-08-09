import React from "react";
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return(
        <div className="not-found">
        <div>
            <h1 className="not-found__title">404</h1>
            <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <Link to='/' className="not-found__button">Назад</Link> 
    </div>
    );
}