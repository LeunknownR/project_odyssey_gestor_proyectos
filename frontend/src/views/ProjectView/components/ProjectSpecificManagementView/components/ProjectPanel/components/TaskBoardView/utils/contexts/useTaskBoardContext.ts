import { useContext } from "react";
import TaskBoardContext from "./TaskBoardContext";

const useTaskBoardContext = () => {
    return useContext(TaskBoardContext);
};

export default useTaskBoardContext;
