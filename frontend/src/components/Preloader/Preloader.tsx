//#region Styles
import Loader from "src/components/Loader/Loader";
import { useEffect } from "react";
import { 
    Container,
    Spinner } from "./styles";
import { PreloaderProps } from "./types";
//#endregion

const Preloader = ({
    hidden,
    message = "Cargando..."
}: PreloaderProps) => {
    useEffect(() => {
        if (existPreloadersAreOnScreen()) {
            document.body.classList.add("no-scroll");
            return;
        }
        document.body.classList.remove("no-scroll");
    }, [hidden]);
    const existPreloadersAreOnScreen = (): boolean => {
        const $preloaders: NodeListOf<Element> = document.querySelectorAll(".custom-preloader");
        return [...$preloaders].some($preloader => !$preloader.classList.contains("hidden"));
    }
    const getClassName = () => {
        const classList = ["custom-preloader"];
        hidden && classList.push("hidden");
        return classList.join(" ");
    }
    return (
        <Container className={getClassName()}>
            {message && <h6>{message}</h6>}
            <Spinner>
                <Loader/>
            </Spinner>
        </Container>
    );
}

export default Preloader;