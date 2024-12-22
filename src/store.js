import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        count: counterSlice,
        todo: todoSlice
    }
})

export default store