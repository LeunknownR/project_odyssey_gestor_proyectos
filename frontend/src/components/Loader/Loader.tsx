import { Container } from "./styles";
// import { Icon } from "@iconify/react";

const Loader = () => {
    return (
        <Container>
            {/* <span>Cargando...</span> */}
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

export default Loader;
