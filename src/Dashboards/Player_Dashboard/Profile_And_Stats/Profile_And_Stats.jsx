// import React, { useState } from "react";

// import myprofile from "./images/myprofile.jpg";
// import { CiLocationOn } from "react-icons/ci";
// import { IoIosArrowDown, IoIosStar, IoIosStarOutline } from "react-icons/io";

// import { Link } from "react-router-dom";
// import Profile_Events from "../../Organizer_Dashboard/My_Profile/Profile_Events/Profile_Events";
// import Profile_Rating from "../../Organizer_Dashboard/My_Profile/Profile_Raiting/Profile_Rating";
// import Event_History_Overview from "./Event_History_Overview/Event_History_Overview";
// import Followed_Users from "./Followed_Users/Followed_Users";
// import Followers from "./Followers/Followers";

// const Profile_And_Stats = () => {
//   const [isFollowing, setIsFollowing] = useState(true);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selected, setSelected] = useState("event");

//   const handleFollowClick = () => {
//     if (!isFollowing) setIsFollowing(true);
//     setShowDropdown(!showDropdown);
//   };

//   const handleUnfollow = () => {
//     setIsFollowing(false);
//     setShowDropdown(false);
//   };
//   return (
//     <>
//       <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
//         <div className="flex flex-col gap-3 p-3">
//           <div className="rounded-lg shadow-md bg-white">
//             <div className="p-3 flex justify-between max-lg:flex-col">
//               <p className="text-lg font-semibold max-lg:text-center">
//                 Organizers Profiles
//               </p>
//               <div className="flex items-center gap-10 max-lg:flex-col">
//                 <Link to="/Boost_Player_Profile">
//                   <button className="bg-[#FFDB20] text-white whitespace-nowrap px-5 py-2 rounded-full">
//                     Boost Your Profile
//                   </button>
//                 </Link>
//                 <Link to="/Edit_PLayer_Profile">
//                   <button className="border border-[#e45252] whitespace-nowrap text-[#e45252] rounded-full px-5 py-2">
//                     Edit Profile
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <hr className="pb-5" />
//             <div className="grid grid-cols-1 md:grid-cols-2 p-3">
//               <div className="flex flex-col gap-10 items-center">
//                 <img
//                   className="rounded-full w-[84px] h-[84px] object-cover"
//                   src={myprofile}
//                   alt=""
//                 />
//                 <div className="">
//                   <p className="text-xl font-semibold">Esther Horward</p>
//                   <div className="flex items-center gap-2">
//                     <CiLocationOn />
//                     <p className="text-md font-medium text-[#4D4D4D]">
//                       Bern,Switzerland
//                     </p>
//                   </div>

//                   <div className="flex items-center justify-center">
//                     <IoIosStar className="text-yellow-400" size={20} />
//                     <IoIosStar className="text-yellow-400" size={20} />
//                     <IoIosStar className="text-yellow-400" size={20} />
//                     <IoIosStarOutline className="text-gray-300" size={20} />
//                     <IoIosStarOutline className="text-gray-300" size={20} />
//                   </div>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <div className="relative">
//                     <button
//                       onClick={handleFollowClick}
//                       className="bg-[#e45252] text-white text-[14px] px-6 py-2 rounded-full flex items-center gap-2"
//                     >
//                       {isFollowing ? "Following" : "Follow"}
//                       <IoIosArrowDown />
//                     </button>

//                     {isFollowing && showDropdown && (
//                       <div className="absolute mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10">
//                         <button
//                           onClick={handleUnfollow}
//                           className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//                         >
//                           Unfollow
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                   <button className="border bg-[#e45252] text-white rounded-full px-5 py-2">
//                     Message
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <p className="text-medium text-gray-400">
//                   Personal Description
//                 </p>
//                 <p className="text-lg">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
//                   illo nostrum nam optio facere explicabo quae possimus itaque
//                   voluptate a.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-lg:gap-5">
//                   <div className="flex flex-col gap-5 justity-center">
//                     <div className="">
//                       <p className="text-medium text-gray-400">Full Name</p>
//                       <p className="text-lg">Ester Horward</p>
//                     </div>
//                     <div className="">
//                       <p className="text-medium text-gray-400">Phone Number</p>
//                       <p className="text-lg">+92 00 000 0000</p>
//                     </div>
//                     <div className="">
//                       <p className="text-medium text-gray-400">Country</p>
//                       <p className="text-lg">Pakistan</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-5 justity-center">
//                     <div className="">
//                       <p className="text-medium text-gray-400">Date of Birth</p>
//                       <p className="text-lg">20-5-2024</p>
//                     </div>
//                     <div className="">
//                       <p className="text-medium text-gray-400">Email Address</p>
//                       <p className="text-lg">esterhorward@gmail.com</p>
//                     </div>
//                     <div className="">
//                       <p className="text-medium text-gray-400">City</p>
//                       <p className="text-lg">Islamabad</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-5">
//             <div className="flex gap-5 overflow-x-auto max-w-full whitespace-nowrap pb-2">
//               <button
//                 onClick={() => setSelected("event")}
//                 className={`text-lg border-b-2 ${
//                   selected === "event"
//                     ? "text-black border-black"
//                     : "border-transparent text-gray-400"
//                 }`}
//               >
//                 Event History Overview
//               </button>

//               <button
//                 onClick={() => setSelected("followed")}
//                 className={`text-lg border-b-2 ${
//                   selected === "followed"
//                     ? "text-black border-black"
//                     : "border-transparent text-gray-400"
//                 }`}
//               >
//                 Followed Users
//               </button>
//               <button
//                 onClick={() => setSelected("followers")}
//                 className={`text-lg border-b-2 ${
//                   selected === "followers"
//                     ? "text-black border-black"
//                     : "border-transparent text-gray-400"
//                 }`}
//               >
//                 Followers
//               </button>
//               <button
//                 onClick={() => setSelected("profile")}
//                 className={`text-lg border-b-2 ${
//                   selected === "profile"
//                     ? "text-black border-black"
//                     : "border-transparent text-gray-400"
//                 }`}
//               >
//                 Ratings & Reviews
//               </button>
//             </div>
//             <button className="border border-[#e45252] whitespace-nowrap text-[#e45252] rounded-full px-5 py-2">
//               Sort By
//             </button>
//           </div>

//           {selected == "event" && <Event_History_Overview />}
//           {selected == "profile" && <Profile_Rating />}
//           {selected == "followed" && <Followed_Users />}
//           {selected == "followers" && <Followers />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile_And_Stats;
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown, IoIosStar, IoIosStarOutline } from "react-icons/io";
import { PiPencilSimpleLine } from "react-icons/pi";
import { toast } from "react-toastify";
import Profile_Events from "../../Organizer_Dashboard/My_Profile/Profile_Events/Profile_Events";
import Profile_Rating from "../../Organizer_Dashboard/My_Profile/Profile_Raiting/Profile_Rating";
import Event_History_Overview from "./Event_History_Overview/Event_History_Overview";
import Followed_Users from "./Followed_Users/Followed_Users";
import Followers from "./Followers/Followers";
import defaultProfile from "./images/myprofile.jpg";

const BACKEND_URL = "http://localhost:3001";

const Profile_And_Stats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state || {};
  console.log("locationState:", locationState);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("event");
  const [hasFetched, setHasFetched] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    country: "",
    gender: "",
    age: "",
    description: "",
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const getFullImageUrl = (path) => {
    if (!path || typeof path !== "string" || path.trim() === "") {
      console.warn("Invalid or missing image path, using default profile. Received path:", path);
      return defaultProfile;
    }
    if (path.startsWith("http")) {
      return path;
    }
    return `${BACKEND_URL}/${path}`;
  };

  const fetchPlayerData = async (userId) => {
    try {
      console.log("Fetching player data for userId:", userId);
      const response = await fetch(`${BACKEND_URL}/api/users/play`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to fetch player: ${response.status}`);
      }

      const userData = await response.json();
      console.log("Player data fetched:", JSON.stringify(userData, null, 2));

      if (userData.role !== "user") {
        throw new Error("Selected user is not a player");
      }

      const normalizedProfileImage = getFullImageUrl(userData.profileImage);

      setProfile({
        ...userData,
        profileImage: normalizedProfileImage || defaultProfile,
        phoneNumber: userData.phoneNumber || "",
        rating: locationState.rating || 3,
      });

      setEditForm({
        fullName: userData.fullName || locationState.name || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",
        location: userData.location || locationState.location?.split(",")[0]?.trim() || "",
        country: userData.country || locationState.location?.split(",")[1]?.trim() || "",
        gender: userData.gender || "",
        age: userData.age || "",
        description: userData.description || locationState.description || "",
        profileImage: null,
      });

      return userData;
    } catch (error) {
      console.error("Error fetching player data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const userId = locationState.id || localStorage.getItem("userId");
    if (!userId) {
      console.warn("No player ID in location state or localStorage");
      toast.error("No player selected. Please navigate from the Players page or log in.");
      navigate("/login");
      return;
    }

    const loadPlayer = async () => {
      try {
        setLoading(true);
        await fetchPlayerData(userId);
        setHasFetched(true);
      } catch (error) {
        console.error("Failed to load player:", error);
        if (retryCount < 3) {
          setRetryCount((prev) => prev + 1);
          setTimeout(loadPlayer, 2000 * (retryCount + 1));
        } else {
          toast.error("Failed to load player profile. Using fallback data.");
          setProfile({
            fullName: locationState.name || "Unknown Player",
            location: locationState.location?.split(",")[0]?.trim() || "N/A",
            country: locationState.location?.split(",")[1]?.trim() || "N/A",
            description: locationState.description || "No description provided",
            profileImage: locationState.image || defaultProfile,
            rating: locationState.rating || 3,
            phoneNumber: "",
            email: "",
            age: "",
            gender: "",
          });
          setEditForm({
            fullName: locationState.name || "",
            email: "",
            phoneNumber: "",
            location: locationState.location?.split(",")[0]?.trim() || "",
            country: locationState.location?.split(",")[1]?.trim() || "",
            gender: "",
            age: "",
            description: locationState.description || "",
            profileImage: null,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    if (!hasFetched) {
      loadPlayer();
    }
  }, [locationState.id, hasFetched, retryCount, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file (JPEG, PNG, JPG)");
        e.target.value = "";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        e.target.value = "";
        return;
      }
      const img = new Image();
      img.onload = () => {
        if (img.width < 200 || img.height < 200) {
          toast.error("Image must be at least 200x200 pixels");
          e.target.value = "";
          return;
        }
        setEditForm((prev) => ({
          ...prev,
          profileImage: file,
        }));
        setPreviewImage(URL.createObjectURL(file));
        toast.success("Image selected successfully!");
      };
      img.onerror = () => {
        toast.error("Invalid image file");
        e.target.value = "";
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = locationState.id || localStorage.getItem("userId");
    if (!userId) {
      toast.error("No player ID found. Please navigate from the Players page or log in.");
      navigate("/login");
      return;
    }

    if (!editForm.fullName.trim()) {
      toast.error("Full name is required");
      return;
    }
    if (!editForm.email.trim() || !/^\S+@\S+\.\S+$/.test(editForm.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!editForm.phoneNumber.trim()) {
      toast.error("Phone number is required");
      return;
    }
    if (!/^\+?\d{10,15}$/.test(editForm.phoneNumber.replace(/\s/g, ""))) {
      toast.error("Please enter a valid phone number (10-15 digits)");
      return;
    }
    if (!editForm.location.trim()) {
      toast.error("Location is required");
      return;
    }
    if (!editForm.gender) {
      toast.error("Gender is required");
      return;
    }
    if (!editForm.age || editForm.age < 13 || editForm.age > 120) {
      toast.error("Age must be between 13 and 120");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("fullName", editForm.fullName.trim());
    formData.append("email", editForm.email.trim());
    formData.append("phoneNumber", editForm.phoneNumber.trim());
    formData.append("location", editForm.location.trim());
    if (editForm.country && editForm.country.trim()) {
      formData.append("country", editForm.country.trim());
    }
    formData.append("gender", editForm.gender);
    formData.append("age", editForm.age);
    formData.append("description", editForm.description.trim());
    if (editForm.profileImage) {
      formData.append("profileImage", editForm.profileImage);
    }

    try {
      console.log("Submitting player profile update...");
      const response = await fetch(`${BACKEND_URL}/api/users/update-profile`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to update profile: ${response.status}`);
      }

      const updatedData = await response.json();
      console.log("Profile updated successfully:", JSON.stringify(updatedData, null, 2));

      const normalizedProfileImage = getFullImageUrl(updatedData.user.profileImage);

      setProfile({
        ...updatedData.user,
        profileImage: normalizedProfileImage || defaultProfile,
        phoneNumber: updatedData.user.phoneNumber || editForm.phoneNumber,
        rating: locationState.rating || 3,
      });

      setIsEditing(false);
      setPreviewImage(null);
      setEditForm((prev) => ({
        ...prev,
        profileImage: null,
      }));
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFollowClick = () => {
    if (!isFollowing) setIsFollowing(true);
    setShowDropdown(!showDropdown);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setShowDropdown(false);
  };

  const toggleEdit = () => {
    if (isEditing) {
      setEditForm({
        fullName: profile.fullName || "",
        email: profile.email || "",
        phoneNumber: profile.phoneNumber || "",
        location: profile.location || "",
        country: profile.country || "",
        gender: profile.gender || "",
        age: profile.age || "",
        description: profile.description || "",
        profileImage: null,
      });
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    setIsEditing(!isEditing);
  };

  const handleCancelImage = () => {
    setEditForm((prev) => ({
      ...prev,
      profileImage: null,
    }));
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.info("Image selection cancelled");
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  if (loading) {
    return (
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e45252]"></div>
            <div className="text-lg text-gray-600">Loading player profile...</div>
            {retryCount > 0 && (
              <div className="text-sm text-gray-500">Retry {retryCount}/3</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center space-y-4">
            <div className="text-2xl">😞</div>
            <p className="text-gray-600">Unable to load player profile</p>
            <div className="space-x-2">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate("/Players")}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Back to Players
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const locationParts = profile.location ? profile.location.split(",") : ["", ""];
  const city = locationParts[0]?.trim() || "N/A";
  const displayCountry = profile.country || locationParts[1]?.trim() || "N/A";

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32 p-3">
      <div className="flex flex-col gap-3">
        <div className="rounded-lg shadow-md bg-white">
          <div className="p-3 flex justify-between max-lg:flex-col">
            <p className="text-lg font-semibold max-lg:text-center">Player Profile</p>
            <div className="flex items-center gap-10 max-lg:flex-col max-lg:gap-3 max-lg:mt-3">
              <Link to="/Boost_Player_Profile">
                <button className="bg-[#FFDB20] text-black whitespace-nowrap px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors font-medium">
                  Boost Your Profile
                </button>
              </Link>
              <button
                onClick={toggleEdit}
                disabled={isSubmitting}
                className={`whitespace-nowrap rounded-full px-5 py-2 transition-colors font-medium ${
                  isEditing
                    ? "bg-red-100 text-red-700 border border-red-300 hover:bg-red-200"
                    : "border border-[#e45252] text-[#e45252] hover:bg-red-50"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isEditing ? "Cancel Edit" : "Edit Profile"}
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <hr className="pb-5 border-gray-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-6">
              <div className="flex flex-col gap-10 items-center">
                <div className="relative group">
                  <img
                    className="rounded-full w-[84px] h-[84px] object-cover border-2 border-gray-200 transition-transform hover:scale-105"
                    src={previewImage || getFullImageUrl(profile.profileImage) || defaultProfile}
                    alt={`Profile of ${profile.fullName}`}
                    onError={(e) => {
                      console.error("Error loading profile image:", e.target.src);
                      e.target.src = defaultProfile;
                    }}
                  />
                  {isEditing && (
                    <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <label
                          htmlFor="profileImage"
                          className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors shadow-md"
                          title="Change profile picture"
                        >
                          <PiPencilSimpleLine className="text-red-500 text-sm" />
                          <input
                            ref={fileInputRef}
                            id="profileImage"
                            type="file"
                            accept="image/jpeg,image/jpg,image/png"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        {editForm.profileImage && (
                          <button
                            type="button"
                            onClick={handleCancelImage}
                            className="text-xs text-red-500 hover:text-red-700"
                            title="Remove image"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                  {!isEditing && (
                    <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  )}
                </div>
                <div className="text-center">
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={editForm.fullName}
                      onChange={handleInputChange}
                      className="text-xl font-semibold text-center border-b-2 border-gray-300 focus:border-red-500 focus:outline-none w-full py-1 px-2 bg-transparent"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  ) : (
                    <p className="text-xl font-semibold">{profile.fullName}</p>
                  )}
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <CiLocationOn className="text-gray-500" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={editForm.location}
                        onChange={handleInputChange}
                        className="text-md font-medium text-[#4D4D4D] text-center border-b-2 border-gray-300 focus:border-red-500 focus:outline-none w-3/4 py-1 px-2 bg-transparent"
                        placeholder="City, Country"
                        required
                        disabled={isSubmitting}
                      />
                    ) : (
                      <p className="text-md font-medium text-[#4D4D4D]">{`${city}, ${displayCountry}`}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      i < profile.rating ? (
                        <IoIosStar key={i} className="text-yellow-400" size={20} />
                      ) : (
                        <IoIosStarOutline key={i} className="text-gray-300" size={20} />
                      )
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <button
                      onClick={handleFollowClick}
                      className="bg-[#e45252] text-white text-[14px] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
                      disabled={isEditing || isSubmitting}
                      aria-label={isFollowing ? "Unfollow player" : "Follow player"}
                    >
                      {isFollowing ? "Following" : "Follow"}
                      <IoIosArrowDown />
                    </button>
                    {isFollowing && showDropdown && (
                      <div className="absolute bottom-full mb-2 bg-white border border-gray-200 rounded-md shadow-md z-10 min-w-[120px]">
                        <button
                          onClick={handleUnfollow}
                          className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left transition-colors"
                        >
                          Unfollow
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="border bg-[#e45252] text-white rounded-full px-5 py-2 hover:bg-red-600 transition-colors disabled:opacity-50"
                    disabled={isEditing || isSubmitting}
                    aria-label="Message player"
                  >
                    Message
                  </button>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-medium text-gray-400 mb-1">Personal Description</p>
                  {isEditing ? (
                    <textarea
                      name="description"
                      value={editForm.description}
                      onChange={handleInputChange}
                      className="w-full text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical min-h-[100px] disabled:bg-gray-100"
                      placeholder="Tell us about yourself..."
                      disabled={isSubmitting}
                      rows={4}
                    />
                  ) : (
                    <p className="text-base leading-relaxed max-h-32 overflow-y-auto">
                      {profile.description || "No description provided."}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="fullName"
                          value={editForm.fullName}
                          onChange={handleInputChange}
                          className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent disabled:bg-gray-100"
                          required
                          disabled={isSubmitting}
                        />
                      ) : (
                        <p className="text-base font-medium">{profile.fullName}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editForm.email}
                          onChange={handleInputChange}
                          className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent disabled:bg-gray-100"
                          required
                          disabled={isSubmitting}
                        />
                      ) : (
                        <p className="text-base font-medium">{profile.email || "Not specified"}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Gender</p>
                      {isEditing ? (
                        <select
                          name="gender"
                          value={editForm.gender}
                          onChange={handleInputChange}
                          className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent disabled:bg-gray-100"
                          required
                          disabled={isSubmitting}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Neither Male Nor Female">Neither Male Nor Female</option>
                        </select>
                      ) : (
                        <p className="text-base font-medium">{profile.gender || "Not specified"}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Age</p>
                      {isEditing ? (
                        <input
                          type="number"
                          name="age"
                          value={editForm.age}
                          onChange={handleInputChange}
                          min="13"
                          max="120"
                          className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent disabled:bg-gray-100"
                          required
                          disabled={isSubmitting}
                        />
                      ) : (
                        <p className="text-base font-medium">{profile.age ? `${profile.age} years` : "Not specified"}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={editForm.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent disabled:bg-gray-100"
                          placeholder="+92 300 1234567"
                          required
                          disabled={isSubmitting}
                        />
                      ) : (
                        <p className="text-base font-medium">
                          {profile.phoneNumber || "No phone number set"}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      {isEditing ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            name="location"
                            value={editForm.location}
                            onChange={handleInputChange}
                            className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent"
                            placeholder="City"
                            required
                            disabled={isSubmitting}
                          />
                          <input
                            type="text"
                            name="country"
                            value={editForm.country}
                            onChange={handleInputChange}
                            className="w-full text-base border-b-2 border-gray-300 focus:border-red-500 focus:outline-none py-1 px-2 bg-transparent"
                            placeholder="Country"
                            disabled={isSubmitting}
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <p className="text-base font-medium">{city}</p>
                          <p className="text-sm text-gray-600">{displayCountry}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {isEditing && (
                  <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#e45252] hover:bg-red-600 disabled:bg-red-400 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg disabled:cursor-not-allowed disabled:opacity-75 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center mt-6 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex gap-5 overflow-x-auto max-w-full whitespace-nowrap">
            <button
              onClick={() => setSelected("event")}
              disabled={isEditing || isSubmitting}
              className={`text-lg border-b-2 px-2 py-1 transition-colors font-medium ${
                selected === "event"
                  ? "text-black border-black"
                  : "border-transparent text-gray-400 hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              }`}
              aria-label="View Event History Overview"
            >
              Event History Overview
            </button>
            <button
              onClick={() => setSelected("followed")}
              disabled={isEditing || isSubmitting}
              className={`text-lg border-b-2 px-2 py-1 transition-colors font-medium ${
                selected === "followed"
                  ? "text-black border-black"
                  : "border-transparent text-gray-400 hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              }`}
              aria-label="View Followed Users"
            >
              Followed Users
            </button>
            <button
              onClick={() => setSelected("followers")}
              disabled={isEditing || isSubmitting}
              className={`text-lg border-b-2 px-2 py-1 transition-colors font-medium ${
                selected === "followers"
                  ? "text-black border-black"
                  : "border-transparent text-gray-400 hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              }`}
              aria-label="View Followers"
            >
              Followers
            </button>
            <button
              onClick={() => setSelected("profile")}
              disabled={isEditing || isSubmitting}
              className={`text-lg border-b-2 px-2 py-1 transition-colors font-medium ${
                selected === "profile"
                  ? "text-black border-black"
                  : "border-transparent text-gray-400 hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              }`}
              aria-label="View Ratings and Reviews"
            >
              Ratings & Reviews
            </button>
          </div>
          <button
            className="border border-[#e45252] whitespace-nowrap text-[#e45252] rounded-full px-5 py-2 hover:bg-red-50 transition-colors font-medium disabled:opacity-50"
            disabled={isEditing || isSubmitting}
            aria-label="Sort profile content"
          >
            Sort By
          </button>
        </div>
        <div className="mt-6">
          {selected === "event" && <Event_History_Overview />}
          {selected === "followed" && <Followed_Users />}
          {selected === "followers" && <Followers />}
          {selected === "profile" && <Profile_Rating />}
        </div>
      </div>
    </div>
  );
};

export default Profile_And_Stats;