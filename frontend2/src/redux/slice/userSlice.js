import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement } from "react";

//  acrion
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        formData
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        formData
      );
      console.log(res.data.user)
      console.log(res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user) );
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);



export const fetchDoctorDetail = createAsyncThunk(
  "doctor/fetchDoctorDetail",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().user.token;
    console.log(token)

    try {
      const res = await axios.get(
        "http://localhost:8000/doctor/doctor-me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
console.log(res)
      // return only doctor object
      localStorage.setItem("doctor"  , JSON.stringify(res.data.doctor)) 
      return res.data.doctor;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

//  user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  doctor: JSON.parse(localStorage.getItem("doctor") )|| null ,
  loading: false,
  error: null,
  success: false,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    logout: (state) => {
    state.user = null;
    state.doctor = null
    state.token = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("doctor");
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        // state.doctor = action.payload.doctor;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDoctorDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDoctorDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(fetchDoctorDetail.rejected, (state, action) => {
        state.loading = false;
        state.doctor = null; // no detail found
      });
  },
});

export const { clearState  , logout} = userSlice.actions;
export default userSlice.reducer;
