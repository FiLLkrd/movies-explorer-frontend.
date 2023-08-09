import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardsList(){
    return(
        <section className="cards">
            <ul className="cards__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="cards__btn-yet">Еще</button>
        </section>
    );
}