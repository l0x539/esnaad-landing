"use client";

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import appReducer from "./features/app/appSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

// function quizReducer(state: unknown, action: UnknownAction): unknown {
//   throw new Error("Function not implemented.");
// }
