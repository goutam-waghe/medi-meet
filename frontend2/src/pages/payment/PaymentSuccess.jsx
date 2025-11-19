import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you! Your payment has been completed.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;