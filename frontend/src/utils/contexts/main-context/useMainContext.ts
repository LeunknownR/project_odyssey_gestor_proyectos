import { useContext } from "react";
import MainContext from "./MainContext";

const useMainContext = () => {
    return useContext(MainContext);
};

export default useMainContext;
