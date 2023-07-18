import { useContext } from "react";
import MasterRouterContext from "./MasterRouterContext";

const useMasterRouterContext = () => {
    return useContext(MasterRouterContext);
};

export default useMasterRouterContext;
