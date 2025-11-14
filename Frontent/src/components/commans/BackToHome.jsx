import { RiArrowLeftBoxFill } from '@remixicon/react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <Link to={"/"}>
            <div className="px-4 py-2 bg-gray-600/20 w-fit  border-gray-300 border rounded-md flex gap-2  from-gray-900 via-black to-gray-800 ">
              <RiArrowLeftBoxFill/> Back To Home{" "}
            </div>
          </Link>
  )
}

export default BackToHome