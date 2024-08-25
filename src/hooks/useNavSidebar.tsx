"use client";
import {
  closeSideMenu,
  openSideMenu,
  selectApp,
} from "@/store/features/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function useNavSidebar() {
  const dispatch = useAppDispatch();
  const { isSideMenuOpen } = useAppSelector(selectApp);

  const toggleSideMenu = () => {
    if (isSideMenuOpen) {
      dispatch(closeSideMenu());
    } else {
      dispatch(openSideMenu());
    }
  };
  return { toggleSideMenu, isSideMenuOpen };
}

export default useNavSidebar;