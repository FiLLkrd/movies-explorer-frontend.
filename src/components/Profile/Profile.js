import React, { useState, useEffect } from "react";
import { useUserStore } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

export default function Profile(){
    const { user, logout, setUser } = useUserStore();
    const { values, handleChange, errors, isValid, resetForm } =
      useFormWithValidation({ name: user.name, email: user.email });
    const [isUpdatedData, setIsUpdatedData] = useState(false);
    const [isShowSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const updatedData = await mainApi.updateInfo({
          name: values.name || user.name,
          email: values.email || user.email,
        });
        setUser(updatedData);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      values.name !== user.name || values.email !== user.email
        ? setIsUpdatedData(true)
        : setIsUpdatedData(false);
    }, [values.name, user.name, values.email, user.email]);
  
    useEffect(() => {
      resetForm({ name: user.name, email: user.email }, {}, false);
    }, [user, resetForm]);

    return(
        <>
        <Header />
        <section className="profile">
            <h2 className="profile__title">Привет, {user.name}!</h2>
            <form onSubmit={handleSubmit} noValidate className="profile__form">
                <div className="profile__container">
                <label className="profile__label">Имя</label>
                <input 
                className="profile__input" 
                placeholder="Введите имя"
                type="text"
                id="name"
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                error={errors.name}
                />
                </div>
                <div className="profile__container">
                <label className="profile__label" htmlFor="email">E-mail</label>
                <input 
                className="profile__input" 
                placeholder="Введите email"
                type="email"
                id="email"
                name="email"
                required
                value={values.email || ''}
                onChange={handleChange}
                error={errors.email}
                />
                </div>
                <p
            className={`profile__message ${
              isShowSuccessMessage ? 'profile__message_hidden' : 'null'
            }`}
          >
            Данные успешно обновлены!
          </p>
                <button 
                className="profile__btn-change" 
                type="submit" 
                disabled={!isUpdatedData || !isValid}>Редактировать</button>
                <Link 
                className="profile__btn-exit" 
                type="button"
                to=""
                disabled={!isUpdatedData || !isValid}
                onClick={logout} >Выйти из аккаунта</Link>
            </form>
        </section>
        </>
    );
}