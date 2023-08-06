import React, { useCallback } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm(props){
    const { query, shortsToggleSwitch, onInputChange, onToggleChange, onSubmit } = props;

    const submitSearchForm = useCallback(
    (e) => {
        e.preventDefault();
        onsubmit(query);
    },
    [onSubmit, query]
    );

    return(
        <>
        <section className="search">
            <form className="search__form" noValidate onSubmit={submitSearchForm}>
                <input 
                className="search__input"
                id="search__input" 
                type="search"
                name="search" 
                placeholder="Фильм" 
                required="required"
                onChange={onInputChange}
                value={query || ""}
                autoFocus></input>
                <button className="search__btn" type="submit"></button>
            </form>
        </section>
        <FilterCheckbox />
        </>

    );
}