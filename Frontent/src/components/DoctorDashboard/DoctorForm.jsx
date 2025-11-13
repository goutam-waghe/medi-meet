import React, { useState } from "react";
import { categories } from "../../data.js";

const DoctorForm = () => {
  
  const [formData, setFormData] = useState({
    specialty: "",
    experience: "",
    description: "",
  });

 
  const [file, setFile] = useState(null);

  
  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle file input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      e.target.value = "";
      return;
    }
    setFile(selectedFile);
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.specialty || !formData.experience || !file) {
      alert("Please fill all required fields and upload your credential PDF.");
      return;
    }

    
    const dataToSend = new FormData();
    dataToSend.append("specialty", formData.specialty);
    dataToSend.append("experience", formData.experience);
    dataToSend.append("description", formData.description);
    dataToSend.append("credential", file);

    console.log("Form Data ready to send:", {
      ...formData,
      credential: file.name,
    });

    
  };

  return (
    <div className="text-white flex flex-col gap-5 py-15 items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to MediMeet</h1>
        <p>Tell us how you want to use the platform</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-full max-w-xl text-white flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">
            Complete Your Doctor Profile
          </h1>
          <p className="text-gray-300 text-sm">
            Please provide your professional details for verification
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="specialty"
            className="text-sm font-medium text-gray-200"
          >
            Medical Specialty
          </label>
          <select
            name="specialty"
            id="specialty"
            value={formData.specialty}
            onChange={formDataHandler}
            className="bg-gray-800 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select
            </option>
            {categories.map((value, index) => (
              <option key={index} value={value.name} className="bg-gray-900">
                {value.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="experience"
            className="text-sm font-medium text-gray-200"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={formDataHandler}
            min="0"
            placeholder="Enter your experience in years"
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="credential"
            className="text-sm font-medium text-gray-200"
          >
            Credential Document
          </label>
          <input
            type="file"
            id="credential"
            accept=".pdf"
            onChange={handleFileChange}
            className="text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
          {file && (
            <p className="text-gray-400 text-xs mt-1">
              Selected file: <span className="text-blue-400">{file.name}</span>
            </p>
          )}
          <p className="text-gray-400 text-xs">
            Please upload your medical degree or certification document.
          </p>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-200"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={formDataHandler}
            placeholder="Describe your expertise, experience, services, and approach to patient care..."
            className="border border-gray-600 bg-gray-800 text-white rounded-md p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

       
        <div className="flex flex-col gap-3 sm:flex-row justify-between items-center mt-4">
          <button
            type="button"
            className="bg-gray-600 w-full sm:w-fit hover:bg-gray-700 px-4 py-2 rounded-md transition-all"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 w-full sm:w-fit hover:bg-blue-700 px-4 py-2 rounded-md transition-all"
          >
            Submit for Verification
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
