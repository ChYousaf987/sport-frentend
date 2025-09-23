import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Components/Home/Home";
import Quote from "../Components/Home/Quote";
import Boost from "../Components/Home/Boost-Profile/Boost";
import ProfileView from "../Components/Home/Boost-Profile/ProfileView";
import PaymentMethod from "../Components/Home/Boost-Profile/PaymentMethod";
import Login from "../Components/Forms/Login";
import Sign_up from "../Components/Forms/Sign_up";
import Email_verification from "../Components/Forms/Email_verification";
import ChangeRole from "../Components/Forms/ChangeRole";
import ForgotPassword from "../Components/Forms/ForgotPassword";
import ResetPassword from "../Components/Forms/ResetPassword";
import Event from "../Components/Events/Event";
import EventDetail from "../Components/Events/EventDetail";
import Player_details from "../Components/Events/Player_details";
import Organizer_detail from "../Components/Events/Organizer_detail";
import About from "../Components/About_Us/About";
import News from "../Components/News/News";
import Contact_Us from "../Components/Contact_Us/Contact_Us";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import VerifyOTP from "../Components/Home/VerifyOTP";

const Main_Routes = () => {
  const location = useLocation();
  const hideNavbar = [
    "/signup",
    "/login",
    "/verify-otp",
    "/Change_Role",
    "/forgot-password",
    "/reset-password",
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/boost" element={<Boost />} />
        <Route path="/ProfileView" element={<ProfileView />} />
        <Route path="/PaymentMethod" element={<PaymentMethod />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email_verification" element={<Email_verification />} />
        <Route path="/Change_Role" element={<ChangeRole />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Eventdetail" element={<EventDetail />} />
        <Route path="/Playerdetail" element={<Player_details />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/Organizerdetail" element={<Organizer_detail />} />
        <Route path="/About_Us" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact_Us />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main_Routes;
