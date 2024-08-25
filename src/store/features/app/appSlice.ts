"use client";
import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isModalOpen: false
};

const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
    setModal: (state, action) => {
      state.isModalOpen = action.payload
    }
  },
});

export const { setModal, openModal, closeModal } = appSlice.actions;

export const selectApp = (state: AppState) => state.app;

export default appSlice.reducer;
