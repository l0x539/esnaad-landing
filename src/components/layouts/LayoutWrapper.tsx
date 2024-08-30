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
    const bind = useWheel(({ direction: [_, y] , offset }) => {
        console.log(y);
        
        dispatch(setDirection(y))
    });
    return <div {...bind()}>
        {children}
    </div>;
}

export default LayoutWrapper;