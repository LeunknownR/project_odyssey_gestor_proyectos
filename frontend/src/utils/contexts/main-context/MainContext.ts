/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { InitMainContext } from "./types";

const initMainContext: InitMainContext = {
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
