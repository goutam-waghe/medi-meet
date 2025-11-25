import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice"
import specializationReducer from "../redux/slice/SpacailizationSlice"

import doctorDetailReducer from "../redux/slice/doctorDeatilSlice"

export const store = configureStore(
    {
        reducer:{
            doctorDetail: doctorDetailReducer ,
             user: userReducer,
             specializations: specializationReducer,
             
        }
    }
) 