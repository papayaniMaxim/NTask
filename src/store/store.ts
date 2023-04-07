import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { galleryReducer } from "./gallery/galleryReducer";
import { usersReducer } from "./users/usersReducer";

const savedState = localStorage.getItem("state");
const preloadedState = savedState ? JSON.parse(savedState) : {};

const store = configureStore({
  preloadedState,
  reducer: {
      users: usersReducer,
      gallery: galleryReducer,
  },
  middleware: [],
});

window.addEventListener("beforeunload", () => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;

export default store;
