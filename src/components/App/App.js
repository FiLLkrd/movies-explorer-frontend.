import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { checkAuth } from '../../utils/auth';


function App() {

  const [appInited, setAppInited] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkAuth(jwt)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setAppInited(true);
        });
    } else {
      setAppInited(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setCurrentUser(null);
    navigate('/');
    localStorage.removeItem('queryValue');
    localStorage.removeItem('shortsToggleSwitch');
  };

  if (!appInited) {
    return null;
  }

  return (
    <CurrentUserContext.Provider
    value={{
      user: currentUser,
      setUser: setCurrentUser,
      logout: handleLogout,
    }}
    >
    <div className="app">
      <Routes>
      <Route path="/" element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
            />
      <Route path="/movies" element={
                <ProtectedRoute>
                  <Header />
                  <Movies />
                  <Footer />
                </ProtectedRoute>
              }
            />
      <Route path="/saved-movies" element={
                <ProtectedRoute>  
                  <Header />
                  <SavedMovies />
                  <Footer />
                </ProtectedRoute>
              }
            />
      <Route path="/profile" element={
                <ProtectedRoute>
                  <Header />
                  <Profile />
                </ProtectedRoute>
              }
              />
      <Route path="/sign-up" element={<Register />}/>
      <Route path="/sign-in" element={<Login />}/>
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
