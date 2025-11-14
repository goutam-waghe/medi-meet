import { RiUserLine } from "@remixicon/react";
import { RiCalendar2Line } from "@remixicon/react";
import { RiVideoOnLine } from "@remixicon/react";
import { RiWallet2Line } from "@remixicon/react";
import { RiVerifiedBadgeLine } from "@remixicon/react";
import { RiFile2Line } from "@remixicon/react";
export const howItWorks = [
  {
    icon: RiUserLine,
    heading: "Create Your Profile",
    text: "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: RiCalendar2Line,
    heading: "Book Appointments",
    text: "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: RiVideoOnLine,
    heading: "Video Consultation",
    text: "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: RiWallet2Line,
    heading: "Secure Payment",
    text: "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: RiVerifiedBadgeLine,
    heading: "Verified Doctors",
    text: "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: RiFile2Line,
    heading: "Medical Documentation",
    text: "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

export const homeUserReview = [
  {
    username: "DR pandit",
    userType: "doctor",
    text: "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    username: "DR pandit",
    userType: "patient",
    text: "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    username: "DR pandit",
    userType: "patient",
    text: "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];

export const cities = [
  {
    name: "Indore",
    value: "indore",
  },
  {
    name: "Ahemdabad",
    value: "ahemdabad",
  },
  {
    name: "Mumbai",
    value: "mumbai",
  },
  {
    name: "Delhi",
    value: "delhi",
  },
];

export const userData = {
  email: "user@gmail.com",
  role: "user",
};
export const doctorData = {
  email: "doctor@gmail.com",
  role: "doctor",
};
export const adminData = {
  email: "admin@gmail.com",
  role: "admin",
};

export const categories = [
  {
    name: "General Medicine",
  },
  {
    name: "Heart Surgen",
  },
  {
    name: "Darmalogist",
  },
  {
    name: "Neurology",
  },
];

export const doctorSlots = [
  {
    startTime: "12:00 pm",
    endTime: "6:00 pm",
    status: "Available",
  },
  {
    startTime: "3:00 pm",
    endTime: "6:00 pm",
    status: "UnAvailable",
  },
];


export const appointments = [
  {
    id: 1,
    patientName: "Jack Momos",
    email: "jack@example.com",
    date: "May 29, 2025 at 11:30 AM",
    time: "11:30 AM – 12:00 PM",
    status: "SCHEDULED",
    videoLink: "https://example.com/meeting/jack",
    notes: "",
  },
  {
    id: 2,
    patientName: "Emily Carter",
    email: "emily@example.com",
    date: "May 30, 2025 at 02:00 PM",
    time: "02:00 PM – 02:30 PM",
    status: "SCHEDULED",
    videoLink: "https://example.com/meeting/emily",
    notes: "Patient mentioned mild headache, follow-up required.",
  },
  {
    id: 3,
    patientName: "Rahul Sharma",
    email: "rahul@example.com",
    date: "May 31, 2025 at 09:00 AM",
    time: "09:00 AM – 09:30 AM",
    status: "COMPLETED",
    videoLink: "https://example.com/meeting/rahul",
    notes: "Consultation done — prescribed vitamin supplements.",
  },
  {
    id: 4,
    patientName: "Sophia Turner",
    email: "sophia@example.com",
    date: "June 01, 2025 at 10:00 AM",
    time: "10:00 AM – 10:45 AM",
    status: "CANCELLED",
    videoLink: "https://example.com/meeting/sophia",
    notes: "Appointment canceled by patient.",
  },
  {
    id: 5,
    patientName: "Liam Brown",
    email: "liam@example.com",
    date: "June 02, 2025 at 05:30 PM",
    time: "05:30 PM – 06:00 PM",
    status: "SCHEDULED",
    videoLink: "https://example.com/meeting/liam",
    notes: "",
  },
];
