import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/Signup/SignUp";
import ContactUs from "../components/pages/ContactUs";
import Categories from "../components/pages/Categories";

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
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
