import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
  },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;
// type cho state
export type RootState = ReturnType<typeof store.getState>;
export default store;