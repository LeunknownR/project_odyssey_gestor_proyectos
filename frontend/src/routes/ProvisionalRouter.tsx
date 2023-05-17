import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alexis from "src/views/Alexis/Alexis";
import Login from "src/views/Login/Login";
import ProjectManager from "src/views/ProjectManager/ProjectManager";

const ProvisionalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="alexis" element={<Alexis />} />
                <Route path="ralf" element={<ProjectManager />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ProvisionalRouter;
