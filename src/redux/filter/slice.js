import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "", // тільки фільтр
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
    resetFilters() {
      return initialState;
    },
  },
});

export const { setLanguageFilter, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
