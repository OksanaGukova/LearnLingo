import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";

const firebaseConfig = {
  apiKey: "AIzaSyAp3MvHV75anLVmFpdEbv3EHO4cQn7fFFM",
  authDomain: "teachers-1f7e2.firebaseapp.com",
  projectId: "teachers-1f7e2",
  storageBucket: "teachers-1f7e2.firebasestorage.app",
  messagingSenderId: "295583836486",
  appId: "1:295583836486:web:cf0c4e1cdcf128b50c1d47",
  measurementId: "G-9CZSH008YN"
};


export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/accounts:signUp?key=${firebaseConfig.apiKey}`, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      });
      setAuthHeader(res.data.idToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      });
      setAuthHeader(res.data.idToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const res = await axios.post(`/accounts:lookup?key=${firebaseConfig.apiKey}`, {
        idToken: persistedToken,
      });
      return res.data.users[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default axios;