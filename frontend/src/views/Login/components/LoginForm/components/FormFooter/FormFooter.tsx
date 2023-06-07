import CustomButton from "src/components/CustomButton/CustomButton";
import { FormFooterProps } from "./types";
import { FlexFlow } from "src/components/styles";

const FormFooter = ({ handleSubmit, btnDisabled }: FormFooterProps) => {
    return (
        <FlexFlow justify="center">
            <CustomButton
                content="Ingresar"
                size="big"
                onClick={handleSubmit}
                disabled={btnDisabled}
            />
        </FlexFlow>
    );
};

export default FormFooter;
