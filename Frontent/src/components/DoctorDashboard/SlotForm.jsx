import React from 'react'

const SlotForm = ({showForm , setShowForm }) => {
  return (
     <div>
            <form action="">
              <div className="w-full flex gap-3 items-center">
                <input type="time" className="border border-gray-300 w-full text-white p-2" />
                <h1 className="text-2xl">TO</h1>
                <input className="border border-gray-300 w-full p-2 text-white"  type="time" />
              </div>

              <div className="flex items-center justify-end gap-3 mt-5">
                <button
                className="p-2 bg-red-600 hover:bg-red-500 rounded"
                onClick={() => setShowForm(!showForm)}
              >
                cencel
              </button>
              <button
                className="p-2 bg-blue-600 hover:bg-blue-500 rounded"
                onClick={() => setShowForm(!showForm)}
              >
                save
              </button>
              </div>
            </form>
          </div>
  )
}

export default SlotForm