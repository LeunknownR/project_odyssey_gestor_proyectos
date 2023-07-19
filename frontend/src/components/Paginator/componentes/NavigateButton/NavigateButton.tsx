//#region Styles
// import { Tooltip } from "components/styles";
import { Container } from "./styles";
//#endregion
//#region Icons
import { Icon } from "@iconify/react";
import { NavigateButtonProps } from "./types";
//#endregion

const NavigateButton = ({
    next = false,
    firstOrLast = false,
    changeCurrentPage,
}: NavigateButtonProps) => {
    const getClassName = () => {
        const classList = [];
        next && classList.push("next");
        firstOrLast && classList.push("first-or-last");
        return classList.join(" ");
    };
    return (
        <Container className={getClassName()} onClick={changeCurrentPage}>
            <Icon
                icon="material-symbols:arrow-forward-ios-rounded"
                rotate={1}
            />
        </Container>
    );
};

export default NavigateButton;
