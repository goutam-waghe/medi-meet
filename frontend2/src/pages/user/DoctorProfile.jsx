import React from "react";
import { RiArrowLeftLine } from "@remixicon/react";
import { Link, useParams } from "react-router-dom";
import DoctorProfileCard from "../../Components/DoctorProfileCard";
import { allDoctors } from "../../constant";


// const doctor = {
//   name: "Dr. Michael Chen",
//   specialization: "Dermatologist",
//   rating: 4.7,
//   reviews: 128,
//   experience: 8, 
//   fees: 400,
//   location: "Delhi",

//   experienceTitle1: "Dermatologist Practice",
//   experienceYears: 8,

//   experienceTitle2: "Skin & Hair Specialist",
//   experienceDetails:
//     "Experienced in treating acne, scars, pigmentation, and cosmetic procedures.",
//   image:
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",

//   about:
//     "Dr. Michael is a highly experienced Dermatologist with 8 years of medical practice. Dedicated to providing excellent healthcare services with a patient-centric approach.",

//   qualification1: {
//     title: "Dermatologist Specialization",
//     subTitle: "Board certified in Dermatology",
//   },
//   qualification2: {
//     title: "Medical Degree",
//     subTitle: "MD from recognized institution",
//   },
// };

const DoctorProfile = () => {
   const { id } = useParams(); 
   const doctor = allDoctors.find((val ) => val.id === Number(id))
   
  return (
    <div className="px-5 md:px-12 lg:px-20 my-10 flex flex-col gap-6">
      {/* Back Button */}
      <Link
        to="/doctors"
        className="flex items-center gap-2 text-sky-600 font-medium "
      >
        <RiArrowLeftLine /> Back to Doctors
      </Link>

      {/* Profile Card */}
      <DoctorProfileCard doctor={doctor}  />

      {/* ABOUT SECTION */}
      <div className="bg-white shadow-sm  border-gray-300 border rounded-xl p-6 transition hover:shadow-md">
        <h3 className="text-2xl font-bold mb-3">About</h3>
        <p className="text-gray-700 leading-7">Dr. {doctor.name} is an experienced {doctor.specialization} known for providing personalized and compassionate care. With over {doctor.experience} years in the field, the doctor has helped thousands of patients with accurate diagnosis and effective treatment plans.</p>
      </div>

      {/* EXPERIENCE SECTION */}
      {/* <div className="bg-white shadow-sm  border-gray-300 border rounded-xl p-6 transition hover:shadow-md">
        <h3 className="text-2xl font-bold mb-4">Experience</h3>

        <div className="space-y-5">
          <div className="border-l-4 border-sky-500 pl-4">
            <p className="font-semibold text-lg">{doctor.experienceTitle1}</p>
            <p className="text-gray-600 text-sm">
              {doctor.experienceYears} years of clinical experience
            </p>
          </div>

          <div className="border-l-4 border-sky-500 pl-4">
            <p className="font-semibold text-lg">{doctor.experienceTitle2}</p>
            <p className="text-gray-600 text-sm">{doctor.experienceDetails}</p>
          </div>
        </div>
      </div> */}

      {/* SERVICES SECTION */}
      <div className="bg-white shadow-sm   border-gray-300 border rounded-xl p-6 transition hover:shadow-md">
        <h3 className="text-2xl font-bold mb-4">Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: "Video Consultation",
              desc: "Online consultations via secure video call",
            },
            {
              title: "Professional Advice",
              desc: "Expert medical guidance and recommendations",
            },
            {
              title: "Follow-up Sessions",
              desc: "Regular check-ups and progress monitoring",
            },
            {
              title: "Prescription Help",
              desc: "Medication guidance and recommendations",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-sky-50 p-5 rounded-xl border hover:shadow-md transition"
            >
              <p className="font-semibold text-lg">{service.title}</p>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div className="bg-white shadow-sm  border-gray-300 border rounded-xl p-6 transition hover:shadow-md">
        <h3 className="text-2xl font-bold mb-4">Patient Reviews</h3>

        <div className="space-y-6">
          {[
            {
              name: "Patient 1",
              review:
                "Excellent doctor! Very knowledgeable and caring. Highly recommend!",
              stars: 5,
            },
            {
              name: "Patient 2",
              review:
                "Great consultation. Dr. took time to understand my concerns and provided clear guidance.",
              stars: 5,
            },
            {
              name: "Patient 3",
              review:
                "Professional and experienced. Would definitely book again!",
              stars: 5,
            },
          ].map((r, idx) => (
            <div
              key={idx}
              className="border-b last:border-b-0 pb-4 flex justify-between items-start"
            >
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-gray-700 leading-6">{r.review}</p>
              </div>
              <div className="text-yellow-400 text-lg">
                {"⭐".repeat(r.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="mt-8 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Consult?</h2>

        <p className="mt-2 text-white/90 text-lg">
          Book an appointment with {doctor.name} today
        </p>

        <button className="mt-6 bg-white text-sky-600 font-semibold px-7 py-3 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition">
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
