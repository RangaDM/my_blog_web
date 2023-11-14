import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/Signup/SignUp";
import ContactUs from "../components/pages/ContactUs";
import Categories from "../components/pages/Categories";
import AboutUs from "../components/pages/AboutUs";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainlayout />}>
                <Route path="/" element={<Home />} />
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="categories" element={<Categories />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
