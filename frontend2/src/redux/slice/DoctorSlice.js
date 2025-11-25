import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  acrion
export const fetchDoctors = createAsyncThunk(
  "doctor/fetchDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // get token if required
      const res = await axios.get("http://localhost:8000/doctors", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data; // assume backend returns array of doctors
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

//  user slice

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorSlice.reducer;
