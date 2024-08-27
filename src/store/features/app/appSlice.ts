"use client";
import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isSideMenuOpen: false,
  direction: 1,
  dictionaries: {
    main: {
      header: {
        "about": "About the project",
        "properties": "Property types",
        "gallery": "Gallery",
        "amenities": "Amenities",
        "contactus": "Contact US",
        "aboutus": "About us",
        "callus": "Call Us"
      },
    }
  }
};

const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
    openSideMenu: (state) => {
      state.isSideMenuOpen = true;
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    initializeDictionaries: (state, value) => {
      state.dictionaries = value.payload;
    }
  },
});

export const { initializeDictionaries, setDirection, setModal, openModal, closeModal, openSideMenu, closeSideMenu } = appSlice.actions;

export const selectApp = (state: AppState) => state.app;

export default appSlice.reducer;