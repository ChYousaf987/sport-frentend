import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCirclePlus, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';

const CreateNewEvent = () => {
  const [formData, setFormData] = useState({
    eventTitle: '',
    description: '',
    date: '',
    time: '',
    location: '',
    sport: '',
    organizerName: '',
    organizerGender: '',
    contactNumber1: '',
    contactNumber2: '',
    country: '',
    city: '',
    teamSizeLimit: '',
    maxPlayersPerTeam: '',
    category: '',
    rules: [],
    type: '',
    registrationLimit: '',
    playerGender: '',
    age: '',
    registrationFee: '',
    eventFeeMethod: '',
    features: [],
    media: [],
  });
  const [mediaPreviews, setMediaPreviews] = useState([]);
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(null);
    setError(null);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: checked ? [...prev.features, name] : prev.features.filter((f) => f !== name),
    }));
  };

  const handleRuleAdd = () => {
    setFormData((prev) => ({
      ...prev,
      rules: [...prev.rules, ''],
    }));
  };

  const handleRuleChange = (index, value) => {
    setFormData((prev) => {
      const rules = [...prev.rules];
      rules[index] = value;
      return { ...prev, rules };
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 50 * 1024 * 1024; // 50MB
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/mpeg'];

    const invalidFiles = files.filter((file) => file.size > maxSize || !validTypes.includes(file.type));
    if (invalidFiles.length > 0) {
      setFormError('Files must be images/videos under 50MB');
      return;
    }

    const previews = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith('image') ? 'image' : 'video',
      file,
    }));
    setMediaPreviews(previews);
    setFormData((prev) => ({ ...prev, media: files }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const digitsOnly = value.replace(/\D/g, '');
    setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    setFormError(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    console.log('Submitting form data:', formData);
    console.log('userId from localStorage:', userId);
    if (!userId) {
      setFormError('Please log in as an organizer');
      return;
    }

    // Validate required fields
    const requiredFields = [
      'eventTitle',
      'description',
      'date',
      'time',
      'location',
      'sport',
      'organizerName',
      'organizerGender',
      'contactNumber1',
      'country',
      'city',
      'teamSizeLimit',
      'maxPlayersPerTeam',
      'category',
      'type',
      'registrationLimit',
      'playerGender',
      'age',
      'registrationFee',
      'eventFeeMethod',
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].toString().trim() === ''
    );
    if (missingFields.length > 0) {
      setFormError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Validate numeric fields
    const numericFields = [
      { name: 'teamSizeLimit', value: formData.teamSizeLimit, min: 1 },
      { name: 'maxPlayersPerTeam', value: formData.maxPlayersPerTeam, min: 1 },
      { name: 'registrationLimit', value: formData.registrationLimit, min: 1 },
      { name: 'age', value: formData.age, min: 1 },
      { name: 'registrationFee', value: formData.registrationFee, min: 0 },
    ];
    const invalidNumericFields = numericFields.filter(
      ({ value, min }) => isNaN(parseFloat(value)) || parseFloat(value) < min
    );
    if (invalidNumericFields.length > 0) {
      setFormError(
        `Invalid values for: ${invalidNumericFields
          .map((f) => `${f.name} must be >= ${f.min}`)
          .join(', ')}`
      );
      return;
    }

    // Validate phone number format
    if (!/^\d{10,15}$/.test(formData.contactNumber1)) {
      setFormError('Contact Number 1 must be 10-15 digits');
      return;
    }
    if (
      formData.contactNumber2 &&
      !/^\d{10,15}$/.test(formData.contactNumber2)
    ) {
      setFormError('Contact Number 2 must be 10-15 digits or empty');
      return;
    }

    // Validate date and time
    const { date, time } = formData;
    const parsedDate = new Date(date);
    const now = new Date();
    if (isNaN(parsedDate.getTime())) {
      setFormError('Invalid date format');
      return;
    }
    const [hours, minutes] = time.split(':').map(Number);
    const eventDateTime = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), hours, minutes);
    if (eventDateTime <= now) {
      setFormError('Event date and time cannot be in the past');
      return;
    }

    // Validate userId format
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      setFormError('Invalid user ID format');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('eventTitle', formData.eventTitle);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date); // Send as YYYY-MM-DD
      formDataToSend.append('time', formData.time);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('sport', formData.sport);
      formDataToSend.append('organizerName', formData.organizerName);
      formDataToSend.append('organizerGender', formData.organizerGender);
      formDataToSend.append('contactNumber1', formData.contactNumber1);
      formDataToSend.append('contactNumber2', formData.contactNumber2 || '');
      formDataToSend.append('country', formData.country);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('teamSizeLimit', parseInt(formData.teamSizeLimit));
      formDataToSend.append('maxPlayersPerTeam', parseInt(formData.maxPlayersPerTeam));
      formDataToSend.append('category', formData.category);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('registrationLimit', parseInt(formData.registrationLimit));
      formDataToSend.append('playerGender', formData.playerGender);
      formDataToSend.append('age', parseInt(formData.age));
      formDataToSend.append('registrationFee', parseFloat(formData.registrationFee));
      formDataToSend.append('eventFeeMethod', formData.eventFeeMethod);
      formDataToSend.append('userId', userId);
      formDataToSend.append('rules', JSON.stringify(formData.rules.filter((rule) => rule.trim() !== '')));
      formDataToSend.append('features', JSON.stringify(formData.features));

      formData.media.forEach((file) => {
        formDataToSend.append('media', file);
      });

      const response = await fetch('http://localhost:3001/api/events/create-event', {
        method: 'POST',
        body: formDataToSend,
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Expected JSON, received: ${text.slice(0, 100)}...`);
      }

      console.log('Server response:', data);

      if (!response.ok) {
        if (data.errors) {
          throw new Error(
            `Validation failed: ${data.errors.map((e) => `${e.field}: ${e.message}`).join(', ')}`
          );
        }
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      // Reset form and revoke object URLs
      setFormData({
        eventTitle: '',
        description: '',
        date: '',
        time: '',
        location: '',
        sport: '',
        organizerName: '',
        organizerGender: '',
        contactNumber1: '',
        contactNumber2: '',
        country: '',
        city: '',
        teamSizeLimit: '',
        maxPlayersPerTeam: '',
        category: '',
        rules: [],
        type: '',
        registrationLimit: '',
        playerGender: '',
        age: '',
        registrationFee: '',
        eventFeeMethod: '',
        features: [],
        media: [],
      });
      setMediaPreviews((prev) => {
        prev.forEach((preview) => URL.revokeObjectURL(preview.url));
        return [];
      });
      setFormError(null);
      alert('Event created successfully!');
    } catch (err) {
      setError(err.message || 'Failed to create event');
      console.error('Event creation failed:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const getShareMessage = () => {
    const { eventTitle, date, time, location } = formData;
    const title = eventTitle || 'New Sports Event';
    const dateTime = date && time ? `${date} at ${time}` : 'TBD';
    const locationText = location || 'TBD';
    return encodeURIComponent(`Join my event: ${title} on ${dateTime} at ${locationText}! Check it out!`);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${getShareMessage()}`,
    twitter: `https://twitter.com/intent/tweet?text=${getShareMessage()}`,
    whatsapp: `https://api.whatsapp.com/send?text=${getShareMessage()}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://example.com&title=${encodeURIComponent(
      formData.eventTitle || 'New Sports Event'
    )}&summary=${getShareMessage()}`,
  };

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
      <div className="p-3">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
        >
          <p className="text-lg font-semibold">Create New Event</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Title *</label>
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Sport */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sport *</label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Sport
                </option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
                <option value="Cricket">Cricket</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Media Upload */}
            <div className="md:col-span-2 border rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
              <label className="font-semibold text-md">Upload images and videos (max 50MB each)</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500"
                accept="image/jpeg,image/png,image/gif,video/mp4,video/mpeg"
                multiple
                onChange={handleFileChange}
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {mediaPreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    {preview.type === 'image' ? (
                      <img src={preview.url} alt="Preview" className="w-24 h-24 object-cover rounded" />
                    ) : (
                      <video src={preview.url} className="w-24 h-24 object-cover rounded" controls />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Organizer Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organizer Name *</label>
              <input
                type="text"
                name="organizerName"
                value={formData.organizerName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Organizer Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organizer Gender *</label>
              <select
                name="organizerGender"
                value={formData.organizerGender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Contact Number 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number 1 * (10-15 digits)
              </label>
              <input
                type="tel"
                name="contactNumber1"
                value={formData.contactNumber1}
                onChange={handlePhoneChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="1234567890"
                pattern="[0-9]{10,15}"
                title="Phone number must be 10-15 digits"
              />
            </div>

            {/* Contact Number 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number 2 (10-15 digits)
              </label>
              <input
                type="tel"
                name="contactNumber2"
                value={formData.contactNumber2}
                onChange={handlePhoneChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1234567890"
                pattern="[0-9]{10,15}"
                title="Phone number must be 10-15 digits"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Team Size Limit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team Size Limit *</label>
              <input
                type="number"
                name="teamSizeLimit"
                value={formData.teamSizeLimit}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>

            {/* Max Players Per Team */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Players Per Team *
              </label>
              <input
                type="number"
                name="maxPlayersPerTeam"
                value={formData.maxPlayersPerTeam}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Amateur">Amateur</option>
                <option value="Professional">Professional</option>
                <option value="Recreational">Recreational</option>
                <option value="Competitive">Competitive</option>
              </select>
            </div>

            {/* Rules */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Rules</label>
              {formData.rules.map((rule, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={rule}
                    onChange={(e) => handleRuleChange(index, e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={`Rule ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        rules: prev.rules.filter((_, i) => i !== index),
                      }))
                    }
                    className="ml-2 text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleRuleAdd}
                className="flex items-center text-blue-500 mt-2"
              >
                <FaCirclePlus className="mr-1" /> Add Rule
              </button>
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="Tournament">Tournament</option>
                <option value="League">League</option>
                <option value="Friendly">Friendly</option>
                <option value="Training">Training</option>
              </select>
            </div>

            {/* Registration Limit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Limit *
              </label>
              <input
                type="number"
                name="registrationLimit"
                value={formData.registrationLimit}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>

            {/* Player Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Player Gender *</label>
              <select
                name="playerGender"
                value={formData.playerGender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Mixed">Mixed</option>
                <option value="Any">Any</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>

            {/* Registration Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Fee *
              </label>
              <input
                type="number"
                name="registrationFee"
                value={formData.registrationFee}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="0"
                step="0.01"
              />
            </div>

            {/* Event Fee Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Fee Method *
              </label>
              <select
                name="eventFeeMethod"
                value={formData.eventFeeMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select Fee Method
                </option>
                <option value="Per Team">Per Team</option>
                <option value="Per Player">Per Player</option>
                <option value="Free">Free</option>
              </select>
            </div>

            {/* Features */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
              <div className="grid grid-cols-2 gap-2">
                {['Refreshments', 'Medical Support', 'Trophies', 'Certificates', 'Parking', 'Locker Rooms'].map(
                  (feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        name={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {feature}
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <button
              type="submit"
              className="bg-red-500 rounded-full hover:bg-red-600 text-white font-semibold px-6 py-3"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create the Event'}
            </button>
            <div className="flex gap-4 items-center">
              {[
                { icon: FaFacebook, link: shareLinks.facebook, label: 'Facebook' },
                { icon: FaTwitter, link: shareLinks.twitter, label: 'Twitter' },
                { icon: FaWhatsapp, link: shareLinks.whatsapp, label: 'WhatsApp' },
                { icon: FaLinkedin, link: shareLinks.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${label}`}
                  className="text-[#E45252] hover:text-[#c93e3e] transition"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>
          {(error || formError) && (
            <p className="text-red-500 text-center">{error || formError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateNewEvent;
