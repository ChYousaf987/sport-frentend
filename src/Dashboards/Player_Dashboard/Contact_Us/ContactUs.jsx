import React from "react";

const ContactUs = () => {
  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
          {/* Contact Form */}
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions or inquiries? Fill out the form and we’ll get back
              to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45252]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45252]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Type your subject here"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45252]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45252]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#e45252] text-white py-3 rounded-lg hover:bg-[#d14040] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info / Sidebar */}
          <div className="bg-[#e45252] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-red-100">
                We are here to help and answer any question you might have. We
                look forward to hearing from you!
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-red-100">support@yourcompany.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-red-100">+1 (123) 456-7890</p>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-red-100">123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
