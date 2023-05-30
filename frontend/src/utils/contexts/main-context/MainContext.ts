/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { InitMainContext } from "./types";

const initMainContext: InitMainContext = {
    isMobile: false,
    // checkExpirationTimeToken: {
    //     init: () => undefined,
    //     clear: () => {}
    // }
};
const MainContext = createContext(initMainContext);

export default MainContext;
