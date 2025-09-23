import React, { useState } from 'react';

const Player_Payment = () => {
  // State for selected payment method
  const [selectedPayment, setSelectedPayment] = useState('Zomtel');
  // State for save card checkbox
  const [saveCard, setSaveCard] = useState(true);
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle payment method selection
  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  // Handle checkbox toggle
  const handleSaveCardToggle = () => {
    setSaveCard(!saveCard);
  };

  // Handle modal open/close
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex w-[75%] float-right absolute top-20 right-0 gap-3 bg-[#fafafa] p-3 max-lg:w-[100%] max-lg:top-32 max-lg:mt-10">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          {/* Payment Method Section */}
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

          {/* Mastercard Option */}
          <div className={`flex items-center justify-between p-4 border rounded-lg mb-3 ${selectedPayment === 'Mastercard' ? 'bg-green-50 border-green-200' : ''}`}>
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="w-10 h-6"
              />
              <div>
                <p className="text-sm font-medium">Credit card</p>
                <p className="text-sm text-gray-500">5105 **** **** 0505</p>
              </div>
            </div>
            <input
              type="radio"
              name="payment-method"
              className="w-5 h-5"
              checked={selectedPayment === 'Mastercard'}
              onChange={() => handlePaymentChange('Mastercard')}
            />
          </div>

          {/* Visa Option */}
          <div className={`flex items-center justify-between p-4 border rounded-lg mb-3 ${selectedPayment === 'Visa' ? 'bg-green-50 border-green-200' : ''}`}>
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="w-10 h-6"
              />
              <div>
                <p className="text-sm font-medium">Debit card</p>
                <p className="text-sm text-gray-500">3566 **** **** 0505</p>
              </div>
            </div>
            <input
              type="radio"
              name="payment-method"
              className="w-5 h-5"
              checked={selectedPayment === 'Visa'}
              onChange={() => handlePaymentChange('Visa')}
            />
          </div>

          {/* Zomtel Option (Custom Logo Placeholder) */}
          <div className={`flex items-center justify-between p-4 border rounded-lg mb-3 ${selectedPayment === 'Zomtel' ? 'bg-green-50 border-green-200' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">Z</span>
              </div>
              <div>
                <p className="text-sm font-medium">Debit card</p>
                <p className="text-sm text-gray-500">3304 **** **** 0505</p>
              </div>
            </div>
            <input
              type="radio"
              name="payment-method"
              className="w-5 h-5"
              checked={selectedPayment === 'Zomtel'}
              onChange={() => handlePaymentChange('Zomtel')}
            />
          </div>

          {/* Save Card Checkbox */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              className="w-5 h-5 text-green-600"
              checked={saveCard}
              onChange={handleSaveCardToggle}
            />
            <label className="text-sm text-gray-700">Save card for future payments</label>
          </div>

          {/* Payment Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium">$2730 USD</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-600">Tax</p>
              <p className="text-sm font-medium">$630 USD</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-sm font-semibold">TOTAL</p>
              <p className="text-sm font-semibold">$3360 USD</p>
            </div>
          </div>

          {/* Confirm Payment Button */}
          <button
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            onClick={handleOpenModal}
          >
            Confirm Payment
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              Are you sure you want to confirm payment?
            </h2>

            {/* Payment Details */}
            <div className="bg-pink-50 p-4 rounded-lg mb-6">
              <h3 className="text-sm font-semibold mb-3">DETAILS</h3>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="w-8 h-5"
                />
                <div>
                  <p className="text-sm font-medium">Credit card</p>
                  <p className="text-sm text-gray-500">5105 **** **** 0505</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Event Title:</span> Tournament Circle
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Date & Time:</span> 15-Jan-2024 11:00 am
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Amount:</span> $50
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Location:</span> Switzerland, Bern
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Organizer:</span> Elise John
              </p>
            </div>

            {/* Confirmed Button */}
            <button
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
              onClick={handleCloseModal}
            >
              Confirmed
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Player_Payment;