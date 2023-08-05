import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm(){
    return(
        <>
        <section className="search">
            <form className="search__form">
                <input className="search__input" type="text" placeholder="Фильм" required></input>
                <button className="search__btn" type="submit"></button>
            </form>
        </section>
        <FilterCheckbox />
        </>

    );
}