import React, { useCallback, useState } from "react";
import HeaderLogo from "../../images/HeaderLogo.png";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import { useFormWithValidation } from '../../hooks/useForm';
import { checkAuth, login } from '../../utils/auth';
import { useUserStore } from '../../contexts/CurrentUserContext';

export default function Login(){

    const { values, handleChange, errors, isValid } = useFormWithValidation({
        email: '',
        password: '',
      });
      const navigate = useNavigate();
      const { user, setUser } = useUserStore();
      const [isDisabledInput, setIsDisabledInput] = useState(false);
    
      const handleSubmit = useCallback(
        async (e) => {
          e.preventDefault();
          setIsDisabledInput(true);
          const { email, password } = values;
    
          try {
            const { token } = await login({ email, password });
            localStorage.setItem('jwt', token);
            const userData = await checkAuth(token);
            
            setUser(userData);
            setIsDisabledInput(false);
            navigate('/movies');
            
          } catch (err) {
            console.log(err);
            setIsDisabledInput(false);
          }
        },
        [values, navigate, setUser]
      );
    
      if (user) {
        return <Navigate to="/" />;
      }

    return(
   <div className="login">
       <NavLink exact to='/'>
                    <img src={HeaderLogo} alt="Логотип" className="header__logo" />
                    </NavLink>
       <h2 className="login__title">Рады видеть!</h2>
       <form className="login__form" onSubmit={handleSubmit} noValidate>
        <label className="login__label" htmlFor="email">E-mail</label>
        <input 
        className="login__input" 
        disabled={isDisabledInput}
        type="email"
        id="email"
        name="email"
        required
        placeholder="Введите email"
        value={values['email']}
        onChange={handleChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        {errors['email'] && (
            <span className="login__error">{errors['email']}</span>
          )}
        <label className="login__label" htmlFor="password">Пароль</label>
        <input 
        className="login__input" 
        disabled={isDisabledInput}
        type="password"
        id="password"
        name="password"
        required
        placeholder="Введите пароль"
        value={values['password']}
        onChange={handleChange}
        />
        {errors['password'] && (
            <span className="login__error">{errors['password']}</span>
          )}
          <span className="login__input-error">Что-то пошло не так... </span>
        <button className="login__button" type="submit" disabled={!isValid}>Войти</button>
        <p className="login__text">Еще не зарегистрированы?
        <Link to="/sign-up" className="register__link">Регистрация</Link></p>
       </form>
   </div>
    );
}