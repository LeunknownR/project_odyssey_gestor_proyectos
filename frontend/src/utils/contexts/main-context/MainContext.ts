/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { MainContextFormat } from "./types";

const initMainContext: MainContextFormat = {
    isMobile: false,
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    }
};
const MainContext = createContext(initMainContext);

export default MainContext;
