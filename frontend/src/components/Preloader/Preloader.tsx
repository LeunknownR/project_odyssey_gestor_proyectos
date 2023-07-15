//#region Styles
import { useEffect } from "react";
import { 
    Blades,
    Container,
    Message,
    Spinner } from "./styles";
import { PreloaderProps } from "./types";
import preloaderImage from "src/images/preloader-img.svg"
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
            <Spinner>
                <Blades src={preloaderImage} />
            </Spinner>
            {message && <Message>{message}</Message>}
        </Container>
    );
}

export default Preloader;