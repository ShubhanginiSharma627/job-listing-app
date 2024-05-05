// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/jobSlice"; // Assuming your job slice is correctly set up

const store = configureStore({
    reducer: {
        jobs: jobSlice,
    },
});

export default store;
