import React from "react";

export default function FilterCheckbox(){
    return(
        <form className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"></input>
      <span className="filter__text">Короткометражки</span>
    </form>
  );
}