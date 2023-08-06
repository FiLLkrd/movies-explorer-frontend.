import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardsList(props){
    const { cards, onSave, savedMovies, onDelete } = props;
    return(
        <section className="cards">
            <ul className="cards__list">
                {cards.map((card, index) => (
                    <MoviesCard 
                    card={card}
                    key={card.id || index}
                    savedMovies={savedMovies}
                    onSave={onSave}
                    onDelete={onDelete}
                    />
                ))}
            </ul>
        </section>
    );
}