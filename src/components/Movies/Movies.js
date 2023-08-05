import React from "react";
import MoviesCardsList from "../MoviesCardsList/MoviesCardsList";
import SearchForm from "../SearchForm/SearchForm";


export default function Movies(){
    return(
    <div className="movies">
        <SearchForm />
        <MoviesCardsList />
    </div>
    );
}