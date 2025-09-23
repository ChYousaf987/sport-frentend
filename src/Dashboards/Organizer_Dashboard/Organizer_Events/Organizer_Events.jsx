// Organizer_Events.jsx
import React, { useState, useEffect } from "react";
import ad from "./Images/ad.jpg";
import ad2 from "./Images/ad2.jpg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarDays, FaRegCalendarXmark } from "react-icons/fa6";
import { PiMoney, PiPencilSimpleLine, PiCheck, PiX } from "react-icons/pi";
import { RiDeleteBin7Line, RiEyeLine } from "react-icons/ri";
import { toast } from "react-toastify";

const Organizer_Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deletingEvent, setDeletingEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");

  // Safe image URL getter
  const getImageUrl = (mediaArray, fallback) => {
    try {
      if (mediaArray && Array.isArray(mediaArray) && mediaArray.length > 0) {
        return `http://localhost:3001${mediaArray[0]}`;
      }
      return fallback;
    } catch (err) {
      console.warn("Error getting image URL:", err);
      return fallback;
    }
  };

  // Fetch organizer's events from the backend
  useEffect(() => {
    const fetchOrganizerEvents = async () => {
      if (!userId) {
        toast.error("Please log in to view your events");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/api/events/organizer-events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status}`);
        }

        const data = await response.json();
        const currentDate = new Date();

        // Filter upcoming and past events
        const upcoming = data.filter((event) => {
          try {
            return new Date(event.date) >= currentDate;
          } catch {
            return false;
          }
        });
        
        const past = data.filter((event) => {
          try {
            return new Date(event.date) < currentDate;
          } catch {
            return false;
          }
        });

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error fetching events:", error);
        toast.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchOrganizerEvents();
    }
  }, [userId]);

  // Format date to DD-MMM-YYYY
  const formatDate = (dateString) => {
    try {
      if (!dateString) return "Invalid Date";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid Date";
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "Invalid Date";
    }
  };

  // Initialize edit form
  const initializeEditForm = (event) => {
    setEditForm({
      eventTitle: event.eventTitle || "",
      description: event.description || "",
      date: event.date ? new Date(event.date).toISOString().split('T')[0] : "",
      time: event.time || "",
      location: event.location || "",
      sport: event.sport || "",
      organizerName: event.organizerName || "",
      organizerGender: event.organizerGender || "",
      contactNumber1: event.contactNumber1 || "",
      contactNumber2: event.contactNumber2 || "",
      country: event.country || "",
      city: event.city || "",
      teamSizeLimit: event.teamSizeLimit || "",
      maxPlayersPerTeam: event.maxPlayersPerTeam || "",
      category: event.category || "",
      type: event.type || "",
      registrationLimit: event.registrationLimit || "",
      playerGender: event.playerGender || "",
      age: event.age || "",
      registrationFee: event.registrationFee || "",
      eventFeeMethod: event.eventFeeMethod || "",
    });
  };

  // Handle view event
  const handleViewEvent = (event) => {
    if (event && event._id) {
      setSelectedEvent(event);
      setIsEditing(false);
      setShowModal(true);
    } else {
      toast.error("Invalid event data");
    }
  };

  // Handle edit event - start editing
  const handleStartEdit = (event) => {
    if (event && event._id) {
      initializeEditForm(event);
      setSelectedEvent(event);
      setIsEditing(true);
      setShowModal(true);
    } else {
      toast.error("Invalid event data");
    }
  };

  // Handle input changes for edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle save event
  const handleSaveEvent = async () => {
    if (!selectedEvent || !selectedEvent._id) {
      toast.error("Invalid event data");
      return;
    }

    setIsSaving(true);
    try {
      const updateData = {
        ...editForm,
        userId: userId,
        id: selectedEvent._id,
      };

      const response = await fetch(`http://localhost:3001/api/events/events/${selectedEvent._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save event: ${response.status} - ${errorText}`);
      }

      const updatedEvent = await response.json();
      
      // Update the event in state
      setUpcomingEvents(prev => 
        prev.map(event => 
          event._id === selectedEvent._id ? updatedEvent.event : event
        )
      );
      setPastEvents(prev => 
        prev.map(event => 
          event._id === selectedEvent._id ? updatedEvent.event : event
        )
      );

      // Update selected event and exit edit mode
      setSelectedEvent(updatedEvent.event);
      setIsEditing(false);
      
      toast.success("Event updated successfully!");
    } catch (error) {
      console.error("Error saving event:", error);
      toast.error(`Failed to save event: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm({});
  };

  // Handle delete event - Toast confirmation
  const handleDeleteEvent = async (eventId) => {
    if (!eventId) {
      toast.error("Invalid event ID");
      return;
    }

    // Show confirmation toast
    toast(
      <div className="flex items-center gap-3 p-3">
        <div className="flex-1">
          <p className="font-medium text-sm">Delete this event?</p>
          <p className="text-xs text-gray-600 mt-1">This action cannot be undone.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => confirmDelete(eventId)}
            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        className: "w-96",
      }
    );
  };

  // Confirm delete
  const confirmDelete = async (eventId) => {
    toast.dismiss();
    setDeletingEvent(eventId);
    
    try {
      const response = await fetch(`http://localhost:3001/api/events/events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete event: ${response.status} - ${errorText}`);
      }

      // Remove event from state
      setUpcomingEvents(prev => prev.filter((event) => event._id !== eventId));
      setPastEvents(prev => prev.filter((event) => event._id !== eventId));

      toast.success("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error(`Failed to delete event: ${error.message}`);
    } finally {
      setDeletingEvent(null);
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setIsEditing(false);
    setEditForm({});
    setIsSaving(false);
  };

  // Close modal on outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Render event card safely
  const renderEventCard = (event, fallbackImage, isPast = false) => {
    if (!event || !event._id) return null;

    return (
      <div
        key={event._id}
        className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto"
      >
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <img
            src={getImageUrl(event.media, fallbackImage)}
            alt={event.eventTitle || "event"}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
          <div>
            <h2 className="font-semibold text-sm truncate max-w-[150px]">
              {event.eventTitle || "Untitled Event"}
            </h2>
            <p className="text-xs text-gray-500">📍 {event.location || "Location TBD"}</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
          <p className="text-sm font-semibold mr-2">
            {isPast ? "Completed" : "Participants"}
          </p>
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(4, event.registrationLimit || 0) }).map((_, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://i.pravatar.cc/150?img=${isPast ? i + 10 : i + 1}`}
                alt={`Participant ${i + 1}`}
              />
            ))}
            {isPast ? (
              <div className="w-8 h-8 bg-green-200 text-green-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                ✓
              </div>
            ) : (
              <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                +{Math.max(0, (event.registrationLimit || 0) - 4)}
              </div>
            )}
          </div>
        </div>

        {/* Date & Time */}
        <div className="text-sm text-right sm:text-left min-w-[120px]">
          <p>{formatDate(event.date)}</p>
          <p className="text-gray-500">{event.time || "Time TBD"}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 items-center justify-end flex-wrap min-w-[200px]">
          <button
            onClick={() => handleStartEdit(event)}
            className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
            title="Edit Event"
          >
            <PiPencilSimpleLine className="text-xl" />
          </button>
          <button
            onClick={() => handleDeleteEvent(event._id)}
            disabled={deletingEvent === event._id}
            className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete Event"
          >
            {deletingEvent === event._id ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              <RiDeleteBin7Line className="text-xl" />
            )}
          </button>
          <button
            onClick={() => handleViewEvent(event)}
            className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors text-sm font-medium flex items-center"
          >
            <RiEyeLine className="mr-1" /> View
          </button>
        </div>
      </div>
    );
  };

  // Render modal content based on view/edit mode
  const renderModalContent = () => {
    if (isEditing) {
      return (
        <div className="p-6 space-y-4">
          {/* Edit Header */}
          <div className="flex justify-between items-center pb-3 border-b">
            <h2 className="text-xl font-bold text-gray-800">Edit Event</h2>
            <div className="flex gap-2">
              <button
                onClick={handleCancelEdit}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                title="Cancel Edit"
              >
                <PiX className="text-lg" />
              </button>
              <button
                onClick={handleSaveEvent}
                disabled={isSaving}
                className="p-2 bg-green-500 text-white hover:bg-green-600 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Save Changes"
              >
                {isSaving ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : (
                  <PiCheck className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Edit Form */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
                <input
                  type="text"
                  name="eventTitle"
                  value={editForm.eventTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Event title"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Sport</label>
                <select
                  name="sport"
                  value={editForm.sport}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Sport</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Cricket">Cricket</option>
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={editForm.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={editForm.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={editForm.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event location"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Event description"
              />
            </div>

            {/* Registration Details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Registration Fee ($)</label>
                <input
                  type="number"
                  name="registrationFee"
                  value={editForm.registrationFee}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Registration Limit</label>
                <input
                  type="number"
                  name="registrationLimit"
                  value={editForm.registrationLimit}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Team Details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Max Teams</label>
                <input
                  type="number"
                  name="teamSizeLimit"
                  value={editForm.teamSizeLimit}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Players per Team</label>
                <input
                  type="number"
                  name="maxPlayersPerTeam"
                  value={editForm.maxPlayersPerTeam}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Contact Number 1</label>
                <input
                  type="tel"
                  name="contactNumber1"
                  value={editForm.contactNumber1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone number"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Contact Number 2</label>
                <input
                  type="tel"
                  name="contactNumber2"
                  value={editForm.contactNumber2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // View Mode
    return (
      <div className="p-6 space-y-4">
        {/* View Header */}
        <div className="flex justify-between items-center pb-3 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {selectedEvent.eventTitle || "Untitled Event"}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {selectedEvent.sport || "TBD"}
              </span>
              <span>•</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {selectedEvent.type || "TBD"}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleStartEdit(selectedEvent)}
            className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-full transition-colors"
            title="Edit Event"
          >
            <PiPencilSimpleLine className="text-lg" />
          </button>
        </div>

        {/* Image */}
        {selectedEvent.media && selectedEvent.media.length > 0 && (
          <div className="text-center">
            <img
              src={getImageUrl(selectedEvent.media, ad)}
              alt={selectedEvent.eventTitle}
              className="w-full h-32 object-cover rounded-lg mx-auto"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">Date & Time</p>
            <p className="font-semibold text-sm">
              {formatDate(selectedEvent.date)}<br />
              <span className="text-gray-600 font-normal">
                {selectedEvent.time || "Time TBD"}
              </span>
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">Location</p>
            <p className="font-semibold text-sm">
              {selectedEvent.location || "TBD"}<br />
              <span className="text-gray-600 font-normal text-xs">
                {selectedEvent.city}, {selectedEvent.country}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700 text-sm">Description</h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {selectedEvent.description || "No description available"}
          </p>
        </div>

        {/* Key Details */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-700 text-sm">Event Details</h3>
          
          {/* Registration Info */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-blue-50 p-2 rounded">
              <p className="text-blue-800 font-medium">Registration</p>
              <p className="text-gray-600">${selectedEvent.registrationFee || 0}</p>
              <p className="text-gray-500 text-[10px]">
                {selectedEvent.eventFeeMethod || "TBD"}
              </p>
            </div>
            
            <div className="bg-green-50 p-2 rounded">
              <p className="text-green-800 font-medium">Teams</p>
              <p className="text-gray-600">{selectedEvent.registrationLimit || 0}</p>
              <p className="text-gray-500 text-[10px]">
                {selectedEvent.teamSizeLimit || 0} max
              </p>
            </div>
            
            <div className="bg-purple-50 p-2 rounded">
              <p className="text-purple-800 font-medium">Age</p>
              <p className="text-gray-600">{selectedEvent.age || 0}+</p>
              <p className="text-gray-500 text-[10px]">
                {selectedEvent.playerGender || "TBD"}
              </p>
            </div>
            
            <div className="bg-yellow-50 p-2 rounded">
              <p className="text-yellow-800 font-medium">Category</p>
              <p className="text-gray-600">{selectedEvent.category || "TBD"}</p>
            </div>
          </div>

          {/* Team Details */}
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-xs text-gray-500 mb-1">Team Size</p>
            <p className="text-sm font-medium">
              {selectedEvent.maxPlayersPerTeam || 0} players per team
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-3">
          <h3 className="font-semibold text-gray-700 text-sm mb-2">Contact</h3>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Organizer:</span>
              <span className="font-medium">{selectedEvent.organizerName || "TBD"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="font-medium">{selectedEvent.contactNumber1 || "TBD"}</span>
            </div>
            {selectedEvent.contactNumber2 && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Phone 2:</span>
                <span className="text-gray-600">{selectedEvent.contactNumber2}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features & Rules */}
        {(selectedEvent.features?.length > 0 || selectedEvent.rules?.length > 0) && (
          <div className="space-y-3">
            {selectedEvent.features && Array.isArray(selectedEvent.features) && selectedEvent.features.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 text-xs mb-1">Features</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedEvent.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 text-[10px] px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {selectedEvent.features.length > 4 && (
                    <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-1 rounded">
                      +{selectedEvent.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {selectedEvent.rules && Array.isArray(selectedEvent.rules) && selectedEvent.rules.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 text-xs mb-1">Key Rules</h4>
                <ul className="space-y-1 text-[10px] text-gray-600">
                  {selectedEvent.rules.slice(0, 3).map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-1 text-[10px]">•</span>
                      <span className="line-clamp-1">{rule}</span>
                    </li>
                  ))}
                  {selectedEvent.rules.length > 3 && (
                    <li className="text-gray-500">+{selectedEvent.rules.length - 3} more rules</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading your events...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
        <div className="p-4 flex flex-col gap-3">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarCheck size={24} className="text-red-500" />
              </div>
              <p className="text-sm font-medium">Total Events</p>
              <p className="text-lg font-bold">
                {upcomingEvents.length + pastEvents.length}
              </p>
            </div>

            <div className="bg-purple-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarDays size={24} className="text-purple-500" />
              </div>
              <p className="text-sm font-medium">Upcoming Events</p>
              <p className="text-lg font-bold">{upcomingEvents.length}</p>
            </div>

            <div className="bg-yellow-100 border rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarXmark size={24} className="text-yellow-500" />
              </div>
              <p className="text-sm font-medium">Past Events</p>
              <p className="text-lg font-bold">{pastEvents.length}</p>
            </div>

            <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <PiMoney size={24} className="text-blue-500" />
              </div>
              <p className="text-sm font-medium">Total Revenue</p>
              <p className="text-lg font-bold">
                ${(upcomingEvents.length + pastEvents.length) * 100}
              </p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-3">
              <p className="text-xl font-semibold">Upcoming Events</p>
              <button className="py-2 px-6 border border-[#E45252] text-[#E45252] rounded-full hover:bg-red-50 transition-colors">
                See All
              </button>
            </div>
            <hr />
            <div className="p-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => renderEventCard(event, ad, false))
              ) : (
                <p className="text-center text-gray-500 py-8">No upcoming events found.</p>
              )}
            </div>
          </div>

          {/* Past Events */}
          <div className="rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-3">
              <p className="text-xl font-semibold">Past Events</p>
              <button className="py-2 px-6 border border-[#E45252] text-[#E45252] rounded-full hover:bg-red-50 transition-colors">
                See All
              </button>
            </div>
            <hr />
            <div className="p-4">
              {pastEvents.length > 0 ? (
                pastEvents.map((event) => renderEventCard(event, ad2, true))
              ) : (
                <p className="text-center text-gray-500 py-8">No past events found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit/View Modal */}
      {showModal && selectedEvent && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl relative animate-in slide-in-from-top-2 duration-300">
            {renderModalContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Organizer_Events;