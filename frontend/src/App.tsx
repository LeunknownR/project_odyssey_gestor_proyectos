import { useEffect } from "react";
import { initAxiosInterceptors } from "./interceptors/axios.interceptors";
import useModal from "./components/Modal/utils/hooks/useModal";
import { ResponseCodes } from "./services/utils/enums";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterRouter from "./routes/MasterRouter";
import MainContext from "./utils/contexts/main-context/MainContext";
import useDeviceSize from "./utils/hooks/useDeviceSize";
import LoginView from "./views/LoginView/LoginView";
import usePreloader from "./components/Preloader/utils/hooks/usePreloader";
import Preloader from "./components/Preloader/Preloader";

function App() {
    const preloader = usePreloader();
    const modalUnexpectedError = useModal();
    const { isMobile } = useDeviceSize();
    useEffect(() => {
        initAxiosInterceptors(handlerErrorWithModals);
    }, []);
    function handlerErrorWithModals(code: number): void {
        if (code === ResponseCodes.InternalServerError)
            modalUnexpectedError.open(true);
    }
    return (
        <>
        <MainContext.Provider value={{ 
            preloader, isMobile
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginView />} />
                    <Route path="*" element={<MasterRouter />} />
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
        <Preloader {...preloader.value}/>
        </>
    );
}

export default App;
