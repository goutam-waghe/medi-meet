import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 

export const submitDoctorDetail = createAsyncThunk(
  "doctor/submitDoctorDetail",
  async (formData, { rejectWithValue , getState }) => {
     const token = getState().user.token;
    try {
      const res = await axios.post(
        "http://localhost:8000/doctor/doctor-details", 
        formData,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
             Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log( "err", err.response?.data )
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);


const doctorDetailSlice = createSlice({
  name: "doctorDetail",
  initialState: {
    loading: false,
    success: false,
    error: null,
    doctorDetail: localStorage.getItem("doctorDetail") || null,
  },

  reducers: {
    resetDoctorDetailState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitDoctorDetail.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitDoctorDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.doctorDetail = action.payload;
      })
      .addCase(submitDoctorDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetDoctorDetailState } = doctorDetailSlice.actions;
export default doctorDetailSlice.reducer;
