import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "../Reducers/indexReducer";

const store = configureStore({ reducer: combinedReducers });

export default store;
