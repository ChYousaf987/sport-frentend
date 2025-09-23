import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Organizer_Sidebar from "../Dashboards/Organizer_Dashboard/Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../Dashboards/Organizer_Dashboard/Organizer_Navbar/Organizer_Navbar";
import Organizer_Events from "../Dashboards/Organizer_Dashboard/Organizer_Events/Organizer_Events";
import Organizer from "../Dashboards/Organizer_Dashboard/Organizer/Organizer";
import Organizer_Profile from "../Dashboards/Organizer_Dashboard/Organizer/Organizer_Profile/Organizer_Profile";
import Players from "../Dashboards/Organizer_Dashboard/Players/Players";
import Player_Profile from "../Dashboards/Organizer_Dashboard/Players/Player_Profile/Player_Profile";
import My_Profile from "../Dashboards/Organizer_Dashboard/My_Profile/My_Profile";
import Edit_Profile from "../Dashboards/Organizer_Dashboard/My_Profile/Edit_Profile/Edit_Profile";
import Boost_Profile from "../Dashboards/Organizer_Dashboard/My_Profile/Boost_Profile/Boost_Profile";
import Ratings_And_Feedback from "../Dashboards/Organizer_Dashboard/Ratings_And_Feedback/Ratings_And_Feedback";
import Content_Management from "../Dashboards/Organizer_Dashboard/Content_Management/Content_Management";
import Create_New_Event from "../Dashboards/Organizer_Dashboard/Event_Management/Create_New_Event/Create_New_Event";
import Event_Completion from "../Dashboards/Organizer_Dashboard/Event_Management/Event_Completion/Event_Completion";
import Event_Chat from "../Dashboards/Organizer_Dashboard/Event_Management/Event_Chat/Event_Chat";
import ChatPage from "../Dashboards/Organizer_Dashboard/Event_Management/Event_Chat/Chat_Page/ChatPage";
import Manage_Event from "../Dashboards/Organizer_Dashboard/Manage_Event/Manage_Event";
import Manage_Registration from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Registration";
import Event_Manage_Form from "../Dashboards/Organizer_Dashboard/Manage_Event/Event_Manage_Form/Event_Manage_Form";
import Manage_Team_Registration from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Team_Registration/Manage_Team_Registration";
import Manage_Team from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Team/Manage_Team";
import Teams_Matchup from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Teams_Matchup/Teams_Matchup";
import Single_Matchup from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Single_Matchup/Single_Matchup";
import Group_Play from "../Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Group_Play/Group_Play";
import { FAQ } from "../Dashboards/Organizer_Dashboard/Help_&_Support/FAQ";
import { Accordain } from "../Dashboards/Organizer_Dashboard/Help_&_Support/Accordian";
import Help_Support from "../Dashboards/Organizer_Dashboard/Help_&_Support/Help_Support";
import Privacy_policy from "../Dashboards/Organizer_Dashboard/Help_&_Support/Privacy_policy";
import Financial_Management from "../Dashboards/Organizer_Dashboard/Financial_Management/Financial_Management";
import ProfileView from "../Components/Home/Boost-Profile/ProfileView";
import ProfileViewOrganizer from "../Dashboards/Organizer_Dashboard/My_Profile/Boost_Profile/ProfileViewOrganizer";
import Payment from "../Dashboards/Organizer_Dashboard/My_Profile/Boost_Profile/Payment";
import ChangeRole from "../Components/Forms/ChangeRole";
import OrganizerHome from "../Dashboards/Organizer_Dashboard/OrganizerHome/OrganizerHome";
import ContactUs from "../Dashboards/Player_Dashboard/Contact_Us/ContactUs";

const Organizer_Routes = () => {
  const location = useLocation();
  const hideNavbarSidebar = location.pathname === "/Change_Role";

  return (
    <>
      {!hideNavbarSidebar && <Organizer_Navbar />}
      {!hideNavbarSidebar && <Organizer_Sidebar />}
      <Routes>
        <Route path="/Change_Role" element={<ChangeRole />} />
        <Route path="/organizer-events" element={<Organizer_Events />} />
        <Route path="/Organizer" element={<Organizer />} />
        <Route path="/OrganizerHome" element={<OrganizerHome />} />
        <Route path="/Organizer_Profile" element={<Organizer_Profile />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Player_Profile" element={<Player_Profile />} />
        <Route path="/My_Profile" element={<My_Profile />} />
        <Route path="/Edit_Profile" element={<Edit_Profile />} />
        <Route path="/Boost_Profile" element={<Boost_Profile />} />
        <Route
          path="/ProfileViewOrganizer"
          element={<ProfileViewOrganizer />}
        />
        <Route path="/Payment" element={<Payment />} />
        <Route
          path="/Ratings_And_Feedback"
          element={<Ratings_And_Feedback />}
        />
        <Route path="/Content_Management" element={<Content_Management />} />
        <Route path="/Create_New_Event" element={<Create_New_Event />} />
        <Route path="/Event_Completion" element={<Event_Completion />} />
        <Route path="/Event_Chat" element={<Event_Chat />} />
        <Route path="/event-chat/:eventId" element={<ChatPage />} />
        <Route path="/Manage_Event" element={<Manage_Event />} />
        <Route path="/Manage_Registration" element={<Manage_Registration />} />
        <Route path="/Event_Manage_Form" element={<Event_Manage_Form />} />
        <Route
          path="/Manage_Team_Registration"
          element={<Manage_Team_Registration />}
        />
        <Route path="/Manage_Team" element={<Manage_Team />} />
        <Route path="/Teams_Matchup" element={<Teams_Matchup />} />
        <Route path="/Single_Matchup" element={<Single_Matchup />} />
        <Route path="/Group_Play" element={<Group_Play />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Accordian" element={<Accordain />} />
        <Route path="/Help_Support" element={<Help_Support />} />
        <Route path="/Privacy_policy" element={<Privacy_policy />} />
        <Route
          path="/Financial_Management"
          element={<Financial_Management />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Organizer_Routes;
