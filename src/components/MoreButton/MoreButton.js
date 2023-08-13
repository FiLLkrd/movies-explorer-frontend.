import React from "react";

export default function MoreButton(props){
    const { moreButtonClick } = props;
    return(
        <button className="cards__btn-yet" onClick={moreButtonClick}>Еще</button>
    );
}