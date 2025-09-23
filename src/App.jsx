// App.js - Clean production version
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Main_Routes from "./Routes/Main_Routes";
import Visitor_Routes from "./Routes/Visitor_Routes";
import Organizer_Routes from "./Routes/Organizer_Routes";
import Player_Routes from "./Routes/Player_Routes";
import { fetchUser } from "../src/features/users/userSlice";

function AppContent() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Define auth pages once
  const authPages = ["/signup", "/login", "/verify-otp", "/forgot-password", "/reset-password"];

  // Only fetch user if we're not on auth pages
  useEffect(() => {
    if (!authPages.includes(location.pathname) && !user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user, location.pathname]);

  // Redirect organizer from homepage
  useEffect(() => {
    if (user && location.pathname === "/" && user.role === "organizer") {
      navigate("/organizer-events", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  // Show loading only when actually loading user data (not on auth pages)
  if (loading && !authPages.includes(location.pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // NEVER show error on auth pages - let components handle errors via toast
  if (error && authPages.includes(location.pathname)) {
    // For auth pages, always return the route component
  }

  // Only show critical errors for non-auth pages
  if (error && !authPages.includes(location.pathname) && error !== "No user ID found") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          </div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  // Determine which routes component to render
  let RoutesComponent = Main_Routes;
  
  // Auth pages - always show Main_Routes
  if (authPages.includes(location.pathname)) {
    RoutesComponent = Main_Routes;
  }
  // Route visitor-specific routes for non-authenticated users
  else if (!user) {
    const visitorRoutes = [
      "/visitor-dashboard",
      "/visitorEventdetail",
      "/JoinComunity",
      "/PlayerProfile",
      "/BenefitsSigning",
      "/HelpSupport",
      "/ContactUs",
    ];
    if (visitorRoutes.includes(location.pathname)) {
      RoutesComponent = Visitor_Routes;
    }
  }
  // Route organizer-specific routes
  else if (user) {
    const organizerRoutes = [
      "/organizer-events",
      "/OrganizerHome",
      "/Organizer",
      "/Organizer_Profile",
      "/Players",
      "/Player_Profile",
      "/My_Profile",
      "/Edit_Profile",
      "/Boost_Profile",
      "/ProfileViewOrganizer",
      "/Payment",
      "/Ratings_And_Feedback",
      "/Content_Management",
      "/Create_New_Event",
      "/Event_Completion",
      "/Event_Chat",
      "/event-chat/",
      "/Manage_Event",
      "/Manage_Registration",
      "/Event_Manage_Form",
      "/Manage_Team_Registration",
      "/Manage_Team",
      "/Teams_Matchup",
      "/Single_Matchup",
      "/Group_Play",
      "/FAQ",
      "/Accordian",
      "/Help_Support",
      "/Privacy_policy",
      "/Financial_Management",
      "/ContactUs",
    ];

    if (
      organizerRoutes.some(
        (route) =>
          location.pathname === route || location.pathname.startsWith(route)
      ) ||
      location.pathname === "/organizer-events"
    ) {
      RoutesComponent = Organizer_Routes;
    }
    // Route player-specific routes
    else {
      const playerRoutes = [
        "/",
        "/Player_Section",
        "/Player_Profile_Section",
        "/Profile_And_Stats",
        "/Boost_Player_Profile",
        "/Edit_Player_Profile",
        "/Event_And_Registration",
        "/Player_Event_detail",
        "/EventRegistration",
        "/Notification_And_Alert",
        "/Data_And_Reporting",
        "/Help_And_Support",
        "/Accordian_Player",
        "/Player_FAQs",
        "/Player_Policy",
        "/Player_Financial_Management",
        "/Player_Profile_View",
        "/Player_PaymentMethod",
        "/Player_Payment",
        "/ContactUs",
      ];

      if (
        user.role !== "organizer" &&
        playerRoutes.some(
          (route) =>
            location.pathname === route || location.pathname.startsWith(route)
        )
      ) {
        RoutesComponent = Player_Routes;
      }
    }
  }

  return <RoutesComponent />;
}

export default function AppWrapper() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      {/* Production ToastContainer - Clean and Simple */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
        toastClassName="custom-toast"
        enableMultiContainer={false}
        containerId="global-toast"
        style={{ 
          pointerEvents: 'auto',
          maxWidth: '400px',
          margin: '10px'
        }}
      />
    </div>
  );
}