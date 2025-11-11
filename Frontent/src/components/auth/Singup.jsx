import React, { useState } from 'react'
import { cities } from '../../data';
import image from "../../../public/register.jpg"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });

  async function formDataHandler(e)
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function submitHandler(e)
  {
      e.preventDefault()
      console.log(formData)
    
  }
  

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="flex flex-col md:flex-row w-full md:w-[70%] lg:w-[60%] bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-3">Welcome to MediMeet</h2>
          <p className="text-center text-sm text-blue-100">
            Connect with top doctors instantly — register now and start your journey.
          </p>
        </div>


        <div className="flex w-full md:w-1/2 justify-center items-center p-4 md:p-4">
          <form onSubmit={submitHandler} className="w-full flex flex-col gap-5">
            <h1 className="text-3xl md:text-3xl font-semibold text-center text-gray-800 mb-4">
              Register Form
            </h1>


            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Your Name"
              type="text"
              name='name'
              value={formData.name}
              onChange={formDataHandler}
            />

            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Your Email"
              type="email"
              name='email'
              value={formData.email}
              onChange={formDataHandler}
            />

            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              name='password'
              onChange={formDataHandler}
            />

            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Your Phone"
              type="text"
              name='phone'
              value={formData.phone}
              onChange={formDataHandler}
            />

            <div>
              <label
                htmlFor="city-select"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select City
              </label>

              <select
                id="city-select"
                name="city"
                value={formData.city}
                onChange={formDataHandler}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out cursor-pointer"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Submit
            </button>
            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup