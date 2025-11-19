import React from "react";

const HomeCategory = ({name , available , Icon}) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
          <Icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500">{available} available</p>
        </div>
    </div>
    </div>
  );
};

export default HomeCategory;
