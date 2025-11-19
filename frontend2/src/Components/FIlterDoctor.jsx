import React from "react";
import { RiCrossLine } from "@remixicon/react";

const FilterDoctor = ({
  specializations,
  cities,
  selectedSpecialization,
  selectedCity,
  maxFees,
  minExperience,
  handleResetFilters,
  setSelectedSpecialization,
  setSelectedCity,
  setMaxFees,
  setMinExperience,
  isMobile,
  closeMobile
}) => {
  return (
    <div className="bg-white rounded-xl p-6 healthcare-shadow w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

        {(selectedCity ||
          maxFees < 1000 ||
          minExperience > 0 ||
          selectedSpecialization) && (
          <button
            onClick={handleResetFilters}
            className="text-xs font-medium text-primary hover:underline"
          >
            Reset
          </button>
        )}

        {isMobile && (
          <button onClick={closeMobile} className="md:hidden p-1">
            <RiCrossLine size={20} />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Specialization */}
        <div>
          <h3 className="font-semibold mb-3">Specialization</h3>
          <div className="space-y-2">
            {specializations.map((spec) => (
              <label key={spec} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedSpecialization === spec}
                  onChange={() =>
                    setSelectedSpecialization(
                      selectedSpecialization === spec ? "" : spec
                    )
                  }
                />
                <span>{spec}</span>
              </label>
            ))}
          </div>
        </div>

        {/* City */}
        <div>
          <h3 className="font-semibold mb-3">City</h3>
          <div className="space-y-2">
            {cities.map((city) => (
              <label key={city} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCity === city}
                  onChange={() =>
                    setSelectedCity(selectedCity === city ? "" : city)
                  }
                />
                <span>{city}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fees */}
        <div>
          <h3 className="font-semibold mb-3">Max Fees: ₹{maxFees}</h3>
          <input
            type="range"
            min="100"
            max="1000"
            step="50"
            value={maxFees}
            onChange={(e) => setMaxFees(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-semibold mb-3">
            Min Experience: {minExperience}+ years
          </h3>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={minExperience}
            onChange={(e) => setMinExperience(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterDoctor;
