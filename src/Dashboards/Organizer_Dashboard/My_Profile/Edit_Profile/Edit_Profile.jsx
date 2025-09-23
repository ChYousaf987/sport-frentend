// Edit_Profile.jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUser,
  updateUserProfileThunk,
  clearSuccess,
  clearError,
} from "../../../../features/users/userSlice";
import defaultProfile from "./Images/myprofile.jpg";

const Edit_Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error, success, message } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    gender: "",
    age: "",
    description: "",
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        location: user.location || "",
        gender: user.gender || "",
        age: user.age || "",
        description: user.description || "",
        profileImage: null,
      });
      setPreviewImage(user.profileImage || defaultProfile);
    }
  }, [user]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(clearSuccess());
      }, 3000);
    }
    if (error) {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  }, [success, error, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const formDataToSend = new FormData();
    formDataToSend.append("userId", userId);
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("description", formData.description);
    if (formData.profileImage) {
      formDataToSend.append("profileImage", formData.profileImage);
    }

    dispatch(updateUserProfileThunk(formDataToSend));
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to edit your profile.</div>;

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
      <div className="bg-[#FAFAFA] min-h-screen p-5">
        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
          <hr className="py-2" />
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={previewImage}
                alt="Profile"
                className="rounded-full w-[100px] h-[100px] object-cover"
              />
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full text-sm cursor-pointer"
              >
                ✎
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">{formData.fullName}</h3>
            <p className="text-gray-500">@{formData.location}</p>
            <p className="text-lg font-semibold mt-2">Personal Description</p>
            <div className="relative mt-2 max-w-md w-full">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border rounded text-sm"
                rows="4"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Neither Male Nor Female">
                    Neither Male Nor Female
                  </option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Age</label>
                <input
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#e45252] text-white px-6 py-2 rounded-full"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit_Profile;
