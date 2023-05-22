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
        //initofflinehandler();
        //checkexpirationtime();
        //hace reload cuando se cierre el modal
    }, []);
    function handlerErrorWithModals(code: number) {
        if (code === ResponseCodes.InternalServerError)
            modalUnexpectedError.open(true);
    }
    return (
        //EN el main context pasar el show. Renderizar el modal
        <>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="*" element={<MasterRouter />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
