import React, { useState, useEffect, useCallback, useMemo } from "react";
import MoviesCardsList from "../MoviesCardsList/MoviesCardsList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";


export default function SavedMovies(){
    const [isLoading, setIsLoading] = useState(false);
    const [queryValue, setQueryValue] = useState("");
    const [filterValue, setFilterValue] = useState(queryValue);
    const [allSavedFilms, setAllSavedFilms] = useState([]);
    const [shortsToggleSwitch, setShortsToggleSwitch] = useState(false);
    const [resultError, setResultError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleSearchFormInput(event) {
        setQueryValue(event.target.value);
      }
    
      function handleShortsToggleSwitchState() {
        setShortsToggleSwitch(!shortsToggleSwitch);
      }
    
      const fetchSavedFilms = useCallback(async () => {
        try {
          setIsLoading(true);
          const films = await mainApi.getSavedMovie();
    
          setAllSavedFilms(
            films.map((film) => ({ ...film, savedMovieId: film._id }))
          );
        } catch (error) {
          console.log(`Ошибка: ${error}.`);
          setResultError(true);
          setErrorMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        } finally {
          setIsLoading(false);
        }
      }, []);
    
      useEffect(() => {
        fetchSavedFilms();
      }, []);

      const filteredFilms = useMemo(() => {
        const filtered = allSavedFilms.filter((film) => {
          if (shortsToggleSwitch && film.duration > 40) {
            return false;
          }
    
          const normalizedSearch = filterValue.toLowerCase();
          const normalizedNameRu = film.nameRU.toLowerCase();
          const normalizedNameEn = film.nameEN.toLowerCase();
    
          return (
            normalizedNameRu.includes(normalizedSearch) ||
            normalizedNameEn.includes(normalizedSearch)
          );
        });
    
        return filtered;
      }, [allSavedFilms, shortsToggleSwitch, filterValue]);
    
      const handleFilmDelete = useCallback((film) => {
        setAllSavedFilms((prev) => prev.filter((f) => f._id !== film._id));
      }, []);
    
      function handleSearch(search) {
        setFilterValue(search);
      }
    

    return(
    <main className="movies">
        <SearchForm 
        query={queryValue}
        onInputChange={handleSearchFormInput}
        shortsToggleSwitch={shortsToggleSwitch}
        onToggleChange={handleShortsToggleSwitchState}
        onSubmit={handleSearch}
        />
        {isLoading ? (
            <Preloader />
          ) : (
            (resultError && (
              <p className="movies__message">
                <span className="movies__message-none">{errorMessage}</span>
              </p>
            )) ||
            (filteredFilms.length > 0 && (
              <>
                <MoviesCardsList
                  cards={filteredFilms}
                  savedMovies={filteredFilms}
                  onDelete={handleFilmDelete}
                />
              </>
            )) ||
            (filteredFilms.length === 0 && (
              <p className="movies__message">Ничего не найдено</p>
            ))
          )}
    </main>
    );
}