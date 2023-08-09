import React from "react";
import MoviesCardsList from "../MoviesCardsList/MoviesCardsList";
import SearchForm from "../SearchForm/SearchForm";


export default function SavedMovies(){
    return(
    <main className="movies">
        <SearchForm />
        <MoviesCardsList />
    </main>
    );
}