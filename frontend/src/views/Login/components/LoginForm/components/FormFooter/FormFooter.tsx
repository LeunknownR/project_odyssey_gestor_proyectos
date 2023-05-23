import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";
import { FormFooterProps } from "./types";

const FormFooter = ({ handleSubmit, btnDisabled }: FormFooterProps) => {
    return (
        <Row justify="center">
            <CustomButton
                content="Ingresar"
                size="big"
                onClick={handleSubmit}
                disabled={btnDisabled}
            />
        </Row>
    );
};

export default FormFooter;
