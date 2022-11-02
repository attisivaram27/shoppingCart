import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/registration";
import Products from "../pages/Products/products";
import Header from "../components/header";
import Profile from "../pages/Profile/profile";



const Router = () => {
    return (
        <BrowserRouter>
            < Header />

            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/login" element={< Login />} />
                <Route path="/registration" element={< Registration />} />
                <Route path="/products" element={< Products />} />
                <Route path="/profile" element={< Profile />} />



            </Routes>
        </BrowserRouter>
    )

}

export default Router;