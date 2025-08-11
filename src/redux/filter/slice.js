import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
  level: "",
  price_per_hour: "",
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLanguageFilter(state, action) {
      state.language = action.payload;
    },
    setLevelFilter(state, action) {
      state.level = action.payload;
    },
    setPriceFilter(state, action) {
      state.price_per_hour = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;