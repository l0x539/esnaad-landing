"use client"
import store from "@/store/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { useWheel } from '@use-gesture/react';
import { useAppDispatch } from "@/store/hooks";
import { setDirection } from "@/store/features/app/appSlice";

const LayoutWrapper: FC<{
    children: ReactNode;
}> = ({children}) => {
    return <Provider store={store}>
        <GestureWrapper>
            {children}
        </GestureWrapper>
    </Provider>;
}

const GestureWrapper: FC<{
    children: ReactNode;
}> = ({children}) => {

    const dispatch = useAppDispatch();
    const bind = useWheel(({ first, direction: [_, y] , offset }) => {
        if ((typeof y !== "undefined") && !first)
            dispatch(setDirection(y))
    });
    return <div className="relative" {...bind()}>
        {children}
    </div>;
}

export default LayoutWrapper;