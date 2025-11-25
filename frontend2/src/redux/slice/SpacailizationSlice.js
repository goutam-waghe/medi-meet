import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSpecializations = createAsyncThunk(
  "specializations/fetchSpecializations",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/auth/get-all-categories"); 
      console.log(res)
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to load specializations");
    }
  }
);


const specializationSlice = createSlice({
  name: "specializations",
  initialState: {
    loading: false,
    error: null,
    list: [], // store specialization array here
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecializations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSpecializations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchSpecializations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default specializationSlice.reducer;
