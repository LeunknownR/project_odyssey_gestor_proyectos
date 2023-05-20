import { useEffect } from "react";
import { initAxiosInterceptors } from "./interceptors/axios.interceptors";
import useModal from "./components/Modal/utils/hooks/useModal";
import { ModalProps } from "./components/Modal/types";
import { ResponseCodes } from "./services/utils/enums";
import "./customize.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import MasterRouter from "./routes/MasterRouter";

function App() {
    const modalUnexpectedError: ModalProps = useModal();
    useEffect(() => {
        initAxiosInterceptors(handlerErrorWithModals);
    }, []);
    function handlerErrorWithModals(code: number) {
        if (code === ResponseCodes.InternalServerError)
            modalUnexpectedError.handleOpen(true);
    }
    // return <ProvisionalRouter />;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="*" element={<MasterRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;