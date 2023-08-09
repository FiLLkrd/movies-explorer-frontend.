import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav className="auth">
            <Link to="/sign-up" className="auth__register-btn">Регистрация</Link>
            <Link to="/sign-in" className="auth__login-btn">Войти</Link>
        </nav>
    );
}
