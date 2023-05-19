import { useEffect } from "react";
import ProvisionalRouter from "./routes/ProvisionalRouter";
import { initAxiosInterceptors } from "./interceptors/axios.interceptors";
import useModal from "./components/Modal/utils/hooks/useModal";
import { ModalProps } from "./components/Modal/types";
import { ResponseCodes } from "./services/utils/enums";
import "./customize.css";

function App() {
    const modalUnexpectedError: ModalProps = useModal();
    useEffect(() => {
        initAxiosInterceptors(handlerErrorWithModals);
    }, []);
    function handlerErrorWithModals(code: number) {
        if (code === ResponseCodes.InternalServerError)
            modalUnexpectedError.handleOpen(true);
    }
    return <ProvisionalRouter />;
}

export default App;