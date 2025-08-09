import { createSlice } from '@reduxjs/toolkit';
import teachersData from '../../teachers.json'; // Adjust the path to your JSON file

// Create a slice of the state
const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        items: teachersData, // Directly set the initial state with teachersData
        loading: false,
        error: null,
    },
    reducers: {
        clearTeachers: (state) => {
            state.items = [];
        },
    },
});

// Export actions and reducer
export const { clearTeachers } = teacherSlice.actions;
/* export default teacherSlice.reducer; */

export const teacherReducer = teacherSlice.reducer;
