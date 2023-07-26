//#region Styles
import { Container, Checkbox } from "./styles";
//#endregion
//#region Types
import CustomCheckboxProps from "./types";
//#endregion

const CustomCheckbox = ({
    label,
    isChecked,
    onChange,
}: CustomCheckboxProps) => {
    return (
        <Container className="custom-checkbox" onClick={onChange}>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <Checkbox className={isChecked ? "checked" : ""}></Checkbox>
            <label>{label}</label>
        </Container>
    );
};

export default CustomCheckbox;
