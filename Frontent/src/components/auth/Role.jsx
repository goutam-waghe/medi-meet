import React from "react";
import { RiUser2Line  , RiStethoscopeLine} from "@remixicon/react";
import { Link } from "react-router-dom";
const Role = () => {
  return (
    <div className="flex text-white flex-col gap-7 justify-center items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="flex items-center flex-col" >
        <h1 className="text-4xl  font-medium">WelCome to MediMeet!</h1>
        <p>Tell us How you want to use Our platform</p>
      </div>
      <div className=" flex gap-10   ">
        <div className="bg-white/10  backdrop-blur-lg rounded-2xl p-5 flex flex-col gap-3 w-[350px] justify-center items-center ">
          <div className="w-15 h-15 rounded-full bg-green-500/20 flex justify-center items-center">
            <RiUser2Line />
          </div>
          <h1 className="text-2xl">Join as a patient</h1>
          <p className="text-sm">
            Lorem ipsum sequi illo cumqu neque assumenda sunt
            fuga earum minus.
          </p>
          
           <Link   className="w-full" to={"/user/dashboard"}> <button className="text-md w-full bg-green-800 px-4 py-2 rounded cursor-pointer">continue as patient </button></Link>
          
        </div>
        <div className="bg-white/10  backdrop-blur-lg rounded-2xl p-5 flex flex-col gap-3 w-[350px] justify-center items-center ">
          <div className="w-15 h-15 rounded-full bg-green-500/20 flex justify-center items-center">
            <RiStethoscopeLine />
          </div>
          <h1 className="text-2xl">Join as a Doctor</h1>
          <p className="text-sm ">
            Lorem ipsum sequi illo cumqu neque assumenda sunt
            fuga earum minus.
          </p>
          <Link className="w-full" to={"/doctor/info"}><button className="text-md  w-full bg-green-800 px-4 py-2 rounded cursor-pointer">continue as Doctor </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Role;
