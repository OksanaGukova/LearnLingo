import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp3MvHV75anLVmFpdEbv3EHO4cQn7fFFM",
  authDomain: "teachers-1f7e2.firebaseapp.com",
  projectId: "teachers-1f7e2",
  storageBucket: "teachers-1f7e2.firebasestorage.app",
  messagingSenderId: "295583836486",
  appId: "1:295583836486:web:cf0c4e1cdcf128b50c1d47",
  measurementId: "G-9CZSH008YN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase(app);


export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, user }, thunkAPI) => {
    try {
      await set(ref(db, `users/${user.uid}`), {
        name,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      return userData;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      
    }
    
  }
  
);


export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ user }, thunkAPI) => {
    try {
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const userRef = ref(db, `users/${user.uid}`);
            const snapshot = await get(userRef);
            const userData = snapshot.val();
            resolve(userData);
          } catch (error) {
            resolve(thunkAPI.rejectWithValue(error.message));
          }
        } else {
          resolve(null);
        }
      });
    });
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

