import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/User";
import ProtectedRoute from "./Components/Header/ProtectedRoute";
import "./App.css";
import Photo from "../src/Components/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      {/*Isso para deixar o footer sempre em baixo*/}
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            {/*Isso para deixar o footer sempre em baixo*/}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
