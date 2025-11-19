import { RiStethoscopeFill } from "@remixicon/react";
import { RiBrain2Fill } from "@remixicon/react";
import { RiHeart2Fill ,  RiVerifiedBadgeFill,
  RiTimeFill,
  RiSecurePaymentFill, } from "@remixicon/react";
import { RiUser2Fill } from "@remixicon/react";
export const specializations = ["Cardiologist", "Dermatologist", "Dentist", "Neurologist", "Pediatrician", "Orthopedist"];

export const cities = ["indore", "ahemdabad", "surat", "munbai", "delhi"];



export const categories = [
  { icon: RiStethoscopeFill , 
   name:"Dermalogist"  ,
   available:23} ,
    { icon: RiBrain2Fill, 
   name:"neurologist"  ,
   available:23} , 
    { icon:RiHeart2Fill , 
   name:"cardiologoist"  ,
   available:23} ,
   { icon:RiUser2Fill , 
   name:"peditrician"  ,
   available:23} ,
   { icon:RiUser2Fill , 
   name:"peditrician"  ,
   available:23} , 
   { icon:RiUser2Fill , 
   name:"peditrician"  ,
   available:23}
]


 export const features = [
    {
      icon: RiVerifiedBadgeFill,
      title: "Verified Doctors",
      description: "All doctors are verified and have years of experience"
    },
    {
      icon:RiTimeFill ,
      title: "Easy Scheduling",
      description: "Book appointments in just a few clicks"
    },
    {
      icon:RiSecurePaymentFill ,
      title: "Secure Payment",
      description: "Safe and secure payment methods"
    }
  ];



export const allDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: 12,
    fees: 500,
    rating: 4.8,
    reviews: 156,
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Dermatologist",
    experience: 8,
    fees: 400,
    rating: 4.7,
    reviews: 128,
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
    experience: 10,
    fees: 350,
    rating: 4.9,
    reviews: 189,
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Dr. James Thompson",
    specialization: "Neurologist",
    experience: 15,
    fees: 600,
    rating: 4.6,
    reviews: 142,
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialization: "Pediatrician",
    experience: 9,
    fees: 380,
    rating: 4.8,
    reviews: 167,
    city: "Pune",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Dr. Robert Kumar",
    specialization: "Orthopedist",
    experience: 14,
    fees: 550,
    rating: 4.7,
    reviews: 134,
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Dr. Angela Martinez",
    specialization: "Cardiologist",
    experience: 11,
    fees: 520,
    rating: 4.9,
    reviews: 178,
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Dr. David Singh",
    specialization: "Dermatologist",
    experience: 7,
    fees: 420,
    rating: 4.5,
    reviews: 95,
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];