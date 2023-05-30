import { useEffect } from "react";
import { initAxiosInterceptors } from "./interceptors/axios.interceptors";
import useModal from "./components/Modal/utils/hooks/useModal";
import { ModalProps } from "./components/Modal/types";
import { ResponseCodes } from "./services/utils/enums";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import MasterRouter from "./routes/MasterRouter";
import MainContext from "./utils/contexts/main-context/MainContext";
import useDeviceSize from "./utils/hooks/useDeviceSize";

function App() {
    const modalUnexpectedError: ModalProps = useModal();
    const { isMobile } = useDeviceSize();
    // const checkExpirationTimeToken = useCheckExpirationTimeToken();
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
        <MainContext.Provider value={{ isMobile }}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<MasterRouter />} />
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    );
}

export default App;
