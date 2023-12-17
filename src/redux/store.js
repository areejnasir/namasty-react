import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/index";

export default store = configureStore({
  reducer: {
    counter: reducer,
  },
})

// store.subscribe(() => console.log(store.getState()));
