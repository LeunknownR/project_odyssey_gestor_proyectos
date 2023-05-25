import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";
import { Dates } from "./styles";

const Period = () => {
    return (
        <Row align="center" gap="16px" padding="0 0 0 65px">
            <Dates>
                <b>Período</b> 10-05-2023 / 10-10-2023
            </Dates>
            <CustomButton
                content="Finalización"
                icon="material-symbols:edit"
                size="supersmall"
            />
        </Row>
    );
};

export default Period;
