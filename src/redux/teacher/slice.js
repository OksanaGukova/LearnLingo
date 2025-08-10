import { createSlice } from '@reduxjs/toolkit';
import teachersData from '../../teachers.json';

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        items: teachersData,
        loading: false,
        error: null,
    },
    reducers: {
        clearTeachers: (state) => {
            state.items = [];
        },
    },
});

export const { clearTeachers } = teacherSlice.actions;
export const teacherReducer = teacherSlice.reducer;
