import React from "react";
import { Route, Routes } from "react-router-dom";
import Player_Overview from "../Dashboards/Player_Dashboard/Player_Overview/Player_Overview";
import Player_Section from "../Dashboards/Player_Dashboard/Players/Player_Section";
import Player_Profile_Section from "../Dashboards/Player_Dashboard/Players/Player_Profile/Player_Profile_Section";
import Profile_And_Stats from "../Dashboards/Player_Dashboard/Profile_And_Stats/Profile_And_Stats";
import Boost_Player_Profile from "../Dashboards/Player_Dashboard/Profile_And_Stats/Boost_Player_Profile/Boost_Player_Profile";
import Edit_Player_Profile from "../Dashboards/Player_Dashboard/Profile_And_Stats/Edit_Player_Profile/Edit_Player_Profile";
import Event_And_Registration from "../Dashboards/Player_Dashboard/Event_And_Registration/Event_And_Registration";
import Player_Event_Detail from "../Dashboards/Player_Dashboard/Event_And_Registration/Player_Event_Detail/Player_Event_Detail";
import EventRegistration from "../Dashboards/Player_Dashboard/Event_And_Registration/Player_Event_Detail/EventRegistration";
import Notification_And_Alert from "../Dashboards/Player_Dashboard/Notification_And_Alerts/Notification_And_Alert";
import Data_And_Reporting from "../Dashboards/Player_Dashboard/Data_And_Reporting/Data_And_Reporting";
import Help_And_Support from "../Dashboards/Player_Dashboard/Help_And_Support/Help_And_Support";
import { Accordain_Player } from "../Dashboards/Player_Dashboard/Help_And_Support/Accordian_Player";
import { Player_FAQs } from "../Dashboards/Player_Dashboard/Help_And_Support/Player_FAQs";
import Player_Policy from "../Dashboards/Player_Dashboard/Help_And_Support/Player_Policy";
import Player_Financial_Management from "../Dashboards/Player_Dashboard/Player_Financial_Management/Player_Financial_Management";
import Player_Profile_View from "../Dashboards/Player_Dashboard/Profile_And_Stats/Boost_Player_Profile/Player_ProfileView/Player_Profile_View";
import Player_PaymentMethod from "../Dashboards/Player_Dashboard/Profile_And_Stats/Boost_Player_Profile/Player_PaymentMethod/Player_PaymentMethod";
import Player_Payment from "../Dashboards/Player_Dashboard/Event_And_Registration/Player_Event_Detail/Player_Payment";
import Player_Navbar from "../Dashboards/Player_Dashboard/Player_Navbar/Player_Navbar";
import Player_Sidebar from "../Dashboards/Player_Dashboard/Player_Sidebar/Player_Sidebar";
import ChangeRole from "../Components/Forms/ChangeRole";
import Organizer from "../Dashboards/Organizer_Dashboard/Organizer/Organizer";
import Organizer_Profile from "../Dashboards/Organizer_Dashboard/Organizer/Organizer_Profile/Organizer_Profile";
import ContactUs from "../Dashboards/Player_Dashboard/Contact_Us/ContactUs";

const Player_Routes = () => {
  return (
    <>
      <Player_Navbar />
      <Player_Sidebar />
      <Routes>
        <Route path="/Change_Role" element={<ChangeRole />} />
        <Route path="/" element={<Player_Overview />} />
        <Route path="/Organizer" element={<Organizer />} />
        <Route path="/Organizer_Profile" element={<Organizer_Profile />} />
        <Route path="/Player_Section" element={<Player_Section />} />
        <Route
          path="/Player_Profile_Section"
          element={<Player_Profile_Section />}
        />
        <Route path="/Profile_And_Stats" element={<Profile_And_Stats />} />
        <Route
          path="/Boost_Player_Profile"
          element={<Boost_Player_Profile />}
        />
        <Route path="/Edit_Player_Profile" element={<Edit_Player_Profile />} />
        <Route
          path="/Event_And_Registration"
          element={<Event_And_Registration />}
        />
        <Route path="/Player_Event_detail" element={<Player_Event_Detail />} />
        <Route path="/EventRegistration" element={<EventRegistration />} />
        <Route
          path="/Notification_And_Alert"
          element={<Notification_And_Alert />}
        />
        <Route path="/Data_And_Reporting" element={<Data_And_Reporting />} />
        <Route path="/Help_And_Support" element={<Help_And_Support />} />
        <Route path="/Accordian_Player" element={<Accordain_Player />} />
        <Route path="/Player_FAQs" element={<Player_FAQs />} />
        <Route path="/Player_Policy" element={<Player_Policy />} />
        <Route
          path="/Player_Financial_Management"
          element={<Player_Financial_Management />}
        />
        <Route path="/Player_Profile_View" element={<Player_Profile_View />} />
        <Route
          path="/Player_PaymentMethod"
          element={<Player_PaymentMethod />}
        />
        <Route path="/Player_Payment" element={<Player_Payment />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Player_Routes;
