import React, { useState } from 'react';
import { Link, NavLink, useNavigate, Navigate } from 'react-router-dom';
import HeaderLogo from "../../images/HeaderLogo.svg";
import { useFormWithValidation } from '../../hooks/useForm';
import { useUserStore } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { login, checkAuth } from '../../utils/auth';

export default function Register(){
    const { values, handleChange, errors, isValid } = useFormWithValidation({
        name: '',
        email: '',
        password: '',
      });
      const [isRegOk, setIsRegOk] = useState(true);
      const { user, setUser } = useUserStore();
      const navigate = useNavigate();
      const [isDisabledInput, setIsDisabledInput] = useState(false);
    
      const handleSubmit = async (evt) => {
        evt.preventDefault();
        setIsDisabledInput(true);
        try {
          const { name, email, password } = values;
          await mainApi.register({ name, email, password });
          const { token } = await login({ email, password });
          localStorage.setItem('jwt', token);
          const userInfo = await checkAuth(token);
          setIsRegOk(true);
          setUser(userInfo);
          navigate('/movies');
          setIsDisabledInput(false);
        } catch (err) {
          console.log(err)
          setIsRegOk(false);
          setIsDisabledInput(false);
        }
      };

      if (user) {
        return <Navigate to="/" />;
      }

    return(
   <section className="register">
       <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="login__logo logo" />
                    </NavLink>
       <h2 className="register__title">Добро пожаловать!</h2>
       <form className="register__form" onSubmit={handleSubmit} noValidate>
        <label className="register__label" htmlFor="name">Имя</label>
        <input 
        className="register__input"
        disabled = {isDisabledInput}
        type="text"
        id="username"
        name="name"
        value={values['name']}
        onChange={handleChange}
        required
        placeholder="Введите имя"
        minLength="2"
        maxLength="30"
        />
        {errors['name'] && (
            <span className="form__error">{errors['name']}</span>
          )}
        <label className="register__label" htmlFor="email">E-mail</label>
        <input className="register__input" 
        disabled = {isDisabledInput}
        type="email"
        id="email"
        name="email"
        value={values['email']}
        onChange={handleChange}
        required
        placeholder="Введите email"
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
        />
        {errors['email'] && (
            <span className="form__error">{errors['email']}</span>
          )}
        <label className="register__label" htmlFor="password">Пароль</label>
        <input className="register__input" 
        disabled = {isDisabledInput}
        type="password"
        id="password"
        name="password"
        required
        value={values['password']}
        onChange={handleChange}
        placeholder="Введите пароль"
        />
        {errors['password'] && (
            <span className="form__error">{errors['password']}</span>
          )}
          <span
            className={`form__input-error ${
              isRegOk ? 'form__error_invisible' : 'form__error_visible'
            }`}
          >
            Что-то пошло не так...{' '}
          </span>
        <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы?
        <Link to="/sign-in" className="register__link"> Войти</Link></p>
       </form>
   </section>
    );
}

