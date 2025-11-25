import React from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import doctorImg from "../../../public/banner2.png";
import { categories ,features } from "../../constant.js";
import HomeCategory from "../../Components/HomeCategory.jsx";

import Footer from "../../Components/Footer.jsx";
import botImg from "../../../public/chatbot.png"

const Home = () => {
  return (
    <div className="relative ">
     
      <Header />
       <div className="z-100 absolute bottom-10 left-10 bg-red-600">

        <img className="w-10 h-10 " src={botImg} alt="" />
      </div>
      {/* page 1 */}
      <div className="min-h-screen text-white flex pt-20 flex-col md:flex-row justify-between gap-5  px-10 items-center bg-gradient-to-r from-[#5A00FF]  to-[#2EA6FF]">
        <div className="flex h-full flex-col gap-8 w-full md:w-[50%]">
          <button className="border self-start p-2 border-green-300 rounded-sm text-white">
            HealthCare made simple
          </button>
          <div className="text-5xl font-bold">
            Connect with <br />
            <span className="text-green-400">Doctors</span>
            <br />
            <span className=""> anytime, anywhere</span>
          </div>
          <p>
            Book appointments, consult via video, and manage your healthcare
            journey all in one secure platform.
          </p>
          <div className="flex justify-center gap-3  sm:justify-start">
            <button className="rounded-sm text-blue-600 bg-white  px-4 py-2">
              <Link to={"/register"}>Get started</Link>
            </button>
            <button className="rounded-sm border-white border-2 px-4 py-2">
              <Link to={"/login"}>Find Doctors</Link>
            </button>
          </div>
        </div>
        <div className="w-full mt-10 md:w-[60%]">
          <img className="" src={doctorImg} alt="" />
        </div>
      </div>

      {/* page 2 */}

     <div className="bg-[#F9FAFB] px-10 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-2 justify-center items-center pt-10">
          <h1 className="text-4xl font-bold text-center">Browse by Specialization</h1>
          <p className="text-md text-center">Find the right specialist for your healthcare needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {categories.map((value, index) => {
            return (
              <HomeCategory
                key={index}
                name={value.name}
                 available={value.available}
                Icon={value.icon}
              />
            );
          })}
        </div>
      </div>

      {/* page 3 */}
      <div className="px-10 py-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Featured Doctors</h1>
            <p className="text-lg">Our top-rated healthcare professionals</p>
          </div>
          <div>
            <Link className="bg-blue-600 p-2 rounded text-white">
              View all Doctors
            </Link>
          </div>
        </div>
      </div>
      {/* page 4 */}

    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose MediMeet?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We connect you with verified healthcare professionals offering
            convenient online and in-person appointments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="mb-4 p-4 bg-blue-100 rounded-full">
                <feature.icon/>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* footer */}
     <Footer/>
    </div>
  );
};

export default Home;
