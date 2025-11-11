import { Link } from "react-router-dom"
import doctorImg from "../../../public/banner2.png"
import { howItWorks, homeUserReview } from "../../data.js"
import HowitWorkCard from "./HowitWorkCard.jsx"
import { HomeUserReview } from "./HomeUserReview.jsx"
import Header from "./Header.jsx"
const HomePage = () => {
  return (

    <div className='text-white'>
      <Header/>
      {/* page 1 */}
      <div className="flex flex-col md:flex-row justify-between gap-5  items-center my-15 mx-10 ">
        <div className="flex h-full flex-col gap-8 w-full md:w-[50%]">
          <button className="border self-start p-2 border-green-900 bg-green-900/20 rounded-sm text-green-600">HealthCare made simple</button>
          <div className="text-5xl font-bold">Connect with <br />
            <span>Doctors</span>
            <br />
            <span className="text-green-600"> anytime, anywhere</span></div>
          <p>Book appointments, consult via video, and manage your healthcare journey all in one secure platform.</p>
          <div className="flex justify-center gap-3  sm:justify-start">
            <button className="rounded-sm bg-blue-600 px-4 py-2">
              <Link to={"/register"}>Get started</Link>
            </button>
            <button className="rounded-sm bg-[#6B7280]/20 px-4 py-2">
              <Link to={"/login"} >Find Doctors</Link>
            </button>
          </div>

        </div>
        <div className="w-full mt-10 md:w-[60%]">
          <img className="" src={doctorImg} alt="" />
        </div>
      </div>
      {/* page 2 */}
      <div className="bg-[#121212]  mt-15 py-15 px-10 rounded">
        <div className="flex flex-col justify-center items-center mb-10 mt-5 gap-3">
          <h1 className="text-4xl font-bold">How It Works</h1>
          <p className="text-md font-light">Our platform makes healthcare accessible with just a few clicks</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-10">
          {
            howItWorks.map((value, index) => {
              return <HowitWorkCard key={index} Icon={value.icon} heading={value.heading} text={value.text} />
            })
          }
        </div>


      </div >
      {/* page 3 */}
      <div className="bg-[#121212] mt-20 p-10">
        <div className="flex flex-col justify-center gap-3 items-center mt-5 mb-10">
          <div className="border p-2 border-green-900 bg-green-900/20 rounded-sm text-green-600">Success stories</div>
          <h1 className="text-4xl font-bold">What Our Users Say</h1>
          <p className="text-md font-light">Hear from patients and doctors who use our platform</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-10">
          {
            homeUserReview.map((value, index) => {
              return <HomeUserReview key={index} userType={value.userType} username={value.username} text={value.text} />
            })
          }
        </div>
      </div>


      {/* page 4 */}
      <div className="bg-[#0A1411] my-10 px-10 mt-20 py-30 flex flex-col rounded gap-3">
    
           
              <h1 className="text-5xl">Ready to take control of your healthcare?</h1>
              <p>Join thousands of users who have simplified their healthcare journey with our platform. Get started today and experience healthcare the way it should be.</p>
               <div className="flex gap-4">
                <button className="bg-[#3C9A66] px-4 py-2 rounded">Signup as user</button>
                <button  className="bg-gray-600/20  px-4 py-2 rounded">View Pricing</button>
              </div>
      </div>
     {/* Footer  */}

     <div className="flex justify-center items-center my-10">
      <div>
        Made by Ajay and Goutam!
      </div>
     </div>


    </div>
  )
}

export default HomePage
