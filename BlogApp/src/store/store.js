import { configureStore } from "@reduxjs/toolkit";
import reducer from "./authSlices";
const store = configureStore({
  reducer: { reducer },
});
export default store;
