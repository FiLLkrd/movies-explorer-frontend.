import { Routes, Route } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";




function App() {

  return (
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
                <>
                  <Header />
                  <Movies />
                  <Footer />
                </>
              }
            />
      <Route path="/saved-movies" element={
                <>  
                  <Header />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/sign-up" element={<Register />}/>
      <Route path="/sign-in" element={<Login />}/>
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
