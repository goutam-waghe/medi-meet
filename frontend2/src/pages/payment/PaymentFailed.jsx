

import React from "react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed ❌</h1>
      <p className="text-lg text-gray-700 mb-6">
        Something went wrong with your payment. Please try again.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentFailed;
