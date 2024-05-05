// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice"; // Assuming your job slice is correctly set up

const store = configureStore({
    reducer: {
        jobs: jobSlice,
    },
});

export default store;
