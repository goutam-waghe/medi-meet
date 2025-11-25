import React, { useState } from "react";
import { allDoctors } from "../../constant.js";
import DoctorCard from "../../Components/DoctorCard.jsx";
import Header from "../../Components/Header.jsx";
import { RiSearch2Line  , RiFilter2Line} from "@remixicon/react";
import FilterDoctor from "../../Components/FIlterDoctor.jsx";
import { useSearchParams } from "react-router-dom";
import {specializations , cities} from "../../constant.js"

const FindDoctors = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [maxFees, setMaxFees] = useState(1000);
  const [minExperience, setMinExperience] = useState(0);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCity("");
    setMaxFees(1000);
    setMinExperience(0);
    setSelectedSpecialization("");
  };
  return (
    <>
     
      {/* Search Feature */}
      <div className="relative px-5">
        <div className="grid gap-3 my-8 ">
          <div className="flex border border-gray-200 px-2  items-center">
            <RiSearch2Line className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-2 py-2 focus:outline-none w-full"
            />
          </div>
        </div>
{/* doctors list and filter */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* filter desktop */}
          <div className="w-50 ">
            {/* Desktop Sidebar */}
            <div className="hidden md:block sticky top-24">
              <FilterDoctor
                specializations={specializations}
                cities={cities}
                selectedSpecialization={selectedSpecialization}
                selectedCity={selectedCity}
                maxFees={maxFees}
                minExperience={minExperience}
                handleResetFilters={handleResetFilters}
                setSelectedSpecialization={setSelectedSpecialization}
                setSelectedCity={setSelectedCity}
                setMaxFees={setMaxFees}
                setMinExperience={setMinExperience}
                isMobile={false}
              />
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 border rounded"
              >
                <RiFilter2Line /> Filters
              </button>
            </div>

            {/* Mobile Sidebar Drawer */}
            {showFilters && (
              <div className="fixed inset-0 bg-black/40 z-30 flex">
                <div className="w-80 bg-white p-4 h-full">
                  <FilterDoctor
                    specializations={specializations}
                    cities={cities}
                    selectedSpecialization={selectedSpecialization}
                    selectedCity={selectedCity}
                    maxFees={maxFees}
                    minExperience={minExperience}
                    handleResetFilters={handleResetFilters}
                    setSelectedSpecialization={setSelectedSpecialization}
                    setSelectedCity={setSelectedCity}
                    setMaxFees={setMaxFees}
                    setMinExperience={setMinExperience}
                    isMobile={true}
                    closeMobile={() => setShowFilters(false)}
                  />
                </div>

                {/* Overlay close */}
                <div
                  className="flex-1"
                  onClick={() => setShowFilters(false)}
                ></div>
              </div>
            )}
          </div>
          {/* doctos */}
          <div className="grid gap-3 flex-1">
            {allDoctors.map((value, index) => {
              return (
                <DoctorCard
                  id={value.id}
                  reviewCount={value.reviews}
                  experience={value.experience}
                  imageUrl={value.image}
                  location={value.city}
                  name={value.name}
                  fee={value.fees}
                  rating={value.rating}
                  specialization={value.specialization}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default FindDoctors;
