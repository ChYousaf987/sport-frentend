import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../Dashboards/Visitor_Dashboard/Overview/Overview";
import VisitorEventsDetail from "../Dashboards/Visitor_Dashboard/Overview/VisitorEventsDetail";
import JoinComunity from "../Dashboards/Visitor_Dashboard/Overview/JoinComunity";
import PlayerProfile from "../Dashboards/Visitor_Dashboard/Overview/PlayerProfile";
import BenefitsOfSigning from "../Dashboards/Visitor_Dashboard/BenefitsOfSiginig/BenefitsOfSigning";
import Visitor_Sidebar from "../Dashboards/Visitor_Dashboard/Sidebar/Visitor_Sidebar";
import Visitor_Navbar from "../Dashboards/Visitor_Dashboard/Visitor_Navbar/Visitor_Navbar";
import Help_Support from "../Dashboards/Visitor_Dashboard/Help&Support/Help_Support";
import Sign_up from "../Components/Forms/Sign_up";
import ContactUs from "../Dashboards/Player_Dashboard/Contact_Us/ContactUs";

const Visitor_Routes = () => {
  return (
    <>
      <Visitor_Sidebar />
      <Visitor_Navbar />
      <Routes>
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/" element={<Overview />} />
        <Route path="/visitor-dashboard" element={<Overview />} />
        <Route path="/visitorEventdetail" element={<VisitorEventsDetail />} />
        <Route path="/JoinComunity" element={<JoinComunity />} />
        <Route path="/PlayerProfile" element={<PlayerProfile />} />
        <Route path="/BenefitsSigning" element={<BenefitsOfSigning />} />
        <Route path="/HelpSupport" element={<Help_Support />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Visitor_Routes;
