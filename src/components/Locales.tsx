"use client"
import { IDictionary } from "@/get-dictionary";
import { initializeDictionaries } from "@/store/features/app/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { useGesture } from "@use-gesture/react";
import { FC, useRef } from "react";

const Locales: FC<{dictionaries: IDictionary}> = ({
  dictionaries
}) => {
  const dispatch = useAppDispatch();
  useGesture({
    onMouseMove: ({
      moving,
      down
    }) => {
      console.log(down);
    }
  }, {
    target: typeof document !== "undefined" ? document.body : undefined
  })

  const initialized = useRef(false)
  if (!initialized.current) {
    dispatch(initializeDictionaries(dictionaries))
    initialized.current = true
  }
  return (<></>);
}

export default Locales;