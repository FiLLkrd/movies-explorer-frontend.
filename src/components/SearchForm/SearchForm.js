import React, { useCallback } from "react";


export default function SearchForm(props){
    const { query, shortsToggleSwitch, onInputChange, onToggleChange, onSubmit } = props;

    const submitSearchForm = useCallback(
    (e) => {
        e.preventDefault();
        onSubmit(query);
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
        <div className="search__checkbox-container">
      <input
        className="search__checkbox"
        type="checkbox"
        id="switch"
        onChange={onToggleChange}
        checked={shortsToggleSwitch} />
        <label className="search__checkbox-label" htmlFor="switch"></label>
      <span className="search__chexbox-text">Короткометражки</span>
    </div>
        </>

    );
} 