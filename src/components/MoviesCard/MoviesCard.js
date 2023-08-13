import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import mainApi from "../../utils/MainApi";

export default function MoviesCard(props){
    const { card, onSave, savedMovies, onDelete } = props;
    const { pathname } = useLocation();


    function setHours(value) {
        return Math.floor(value / 60);
      }

    function setMinutes(value) {
        return value % 60;
      }

    const savedMovie = useMemo(() => {
        return savedMovies.find((m) => m._id === card.savedMovieId);
      }, [savedMovies, card]);

      const saveMovie = useCallback(async () => {
        const saved = await mainApi.addMovie({
          image: card.image,
          thumbnail: card.thumbnail,
          movieId: card.id,
          country: card.country,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          duration: card.duration,
          director: card.director,
          year: card.year,
          description: card.description,
          trailerLink: card.trailerLink,
        });

        onSave(saved);
    }, [card, onSave]);

    const deleteMovie = useCallback(async () => {
        await mainApi.deleteMovie(card.savedMovieId);
    
        onDelete(savedMovie);
      }, [card, onDelete, savedMovie]);
    
      function onSaveButtonClick() {
        if (!savedMovie) {
          saveMovie();
        } else {
          deleteMovie();
        }
      }
    
      function onUnsaveButtonClick() {
        deleteMovie();
      }

      const saveBtnClassName = `card__btn-save ${savedMovie && "card__btn-save_active"}`;

    return(
            <li className="card">
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__name">{card.nameRU}</h2>
                    <p className="card__duration">{setHours(card.duration)}ч {setMinutes(card.duration)}м</p>
                </div>
                {pathname === "/movies" ? (
        <button
          className={saveBtnClassName}
          type="button"
          aria-label="сохранить"
          onClick={onSaveButtonClick}
        />
      ) : (
        <button
          className="card__delete"
          type="button"
          aria-label="сохранить"
          onClick={onUnsaveButtonClick}
        />
      )}
            </div>
            <a href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="card__image" src={card.image} alt="Обложка фильма"/>
            </a>
        
    </li>
  );
}