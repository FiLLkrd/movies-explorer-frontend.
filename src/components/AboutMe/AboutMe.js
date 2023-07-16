import React from "react";

export default function AboutMe(){
    return(
    <div className="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container">
            <div className="about-me__discription">
                <p className="about-me__name">Максим</p>
                <p className="about-me__job">Фронтенд-разработчик, 27 лет</p>
                <p className="about-me__life">Я живу в городе Краснодар, закончил физ-тех КубГУ. У меня есть жена 
и коржик. Я играю в футбол, увлекаюсь всем что связано с IT. Недавно начал кодить. С 2021 года работаю в компании «MANGO OFFICE». После прохождения курса планирую заниматься заказами на фрилансе и применять полученные навыки в основной работе.</p>
            <p className="about-me__link">Github</p>
            </div>
            <div className="about-me__avatar"></div>
        </div>
    </div>
    );
}