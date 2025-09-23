import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, clearContactState } from '../../features/contact/contactSlice';
import '../Style/Home.scss';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineMailOutline } from 'react-icons/md';
import map from './Images/map.png';

const Contact_Us = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    city: '',
    message: '',
  });
  const dispatch = useDispatch();
  const { loading, success, error, message } = useSelector((state) => state.contact);

  const cities = [
    { select: 'Select City', value: '', id: 1 },
    { select: 'City1', value: 'City1', id: 2 },
    { select: 'City2', value: 'City2', id: 3 },
    { select: 'City3', value: 'City3', id: 4 },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  useEffect(() => {
    if (success) {
      alert('Form submitted successfully!');
      setFormData({ name: '', phoneNumber: '', city: '', message: '' });
      dispatch(clearContactState());
    }
    if (error) {
      alert(`Error: ${error}`);
      dispatch(clearContactState());
    }
  }, [success, error, dispatch]);

  return (
    <>
      <div className="news -z-50">
        <div className="landing-bg bg-[#0000002d] w-[100%] flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[60vh]">
          <div className="flex flex-col justify-center items-center mx-auto w-[80%] max-lg:w-[100%] max-lg:px-4">
            <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Contact Us</h1>
            <p className="text-white font-normal text-xl flex justify-center items-center text-center">
              Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br />
              Egestas nibh proin metus vitae aliquam mauris at.
            </p>
            <div className="flex justify-center w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5">
              <button className="text-xl py-1.5 px-3 text-[#ffffff] font-medium rounded-full" style={{ border: '2px solid white' }}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex gap justify-center mx-auto items-center py-10 gap-8 max-lg:flex-col">
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col justify-center gap-8 p-5 max-lg:w-[100%]">
          <h1 className="text-3xl font-bold">Send Us Message Now</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            placeholder="Name"
            className="outline-none rounded-lg p-2 w-[100%]"
            style={{ border: '1.5px solid black' }}
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            required
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-[100%] outline-none rounded-lg p-2"
            style={{ border: '1.5px solid black' }}
          />
          <select
            name="city"
            value={formData.city}
            required
            onChange={handleChange}
            className="px-2 py-2.5 rounded-lg outline-none w-[100%]"
            style={{ border: '1.5px solid black' }}
          >
            {cities.map((option) => (
              <option key={option.id} value={option.value}>
                {option.select}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            placeholder="Message"
            className="w-[100%] p-2 rounded-lg outline-none resize-none h-[13rem]"
            style={{ border: '1.5px solid black' }}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div className="w-[30%] flex flex-col gap-8 px-5 max-lg:w-[100%]">
          <div className="flex flex-col px-4">
            <div className="flex gap-2 items-center">
              <FiPhone className="text-xl" />
              <p className="font-semibold text-lg">Phone Number</p>
            </div>
            <p className="ml-7 flex">+9245657 4567456754</p>
          </div>
          <div className="flex flex-col px-4">
            <div className="flex gap-2 items-center">
              <SlLocationPin className="text-xl" />
              <p className="font-semibold text-lg">Location</p>
            </div>
            <p className="ml-7 flex">Lorem Ipsum fdbvxfgb cfgjhngcn</p>
          </div>
          <div className="flex flex-col px-4">
            <div className="flex gap-2 items-center">
              <MdOutlineMailOutline className="text-xl" />
              <p className="font-semibold text-lg">Gmail Address</p>
            </div>
            <p className="

ml-7 flex">Lorem Ipsum fdbvxfgb cfgjhngcn</p>
          </div>
          <img src={map} alt="Map" className="w-[100%] h-[50vh] rounded-lg object-cover" />
        </div>
      </div>
    </>
  );
};

export default Contact_Us;