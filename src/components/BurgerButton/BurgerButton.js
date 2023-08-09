import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';

export default function BurgerButton(){
    const [isBtnOpen, setIsBtnOpen] = useState(false);

    function clickBtnOpen(){
        setIsBtnOpen(true);
    }

    function clickBtnClose(){
        setIsBtnOpen(false);
    }

    return(
        <section className="burger">
            <button className="burger__button" onClick={clickBtnOpen}></button>
            <Navigation isOpen={isBtnOpen} isClose={clickBtnClose} />
        </section>
    );
}