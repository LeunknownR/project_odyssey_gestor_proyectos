//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import { Check, Container, Skull, Text } from "./styles";
//#endregion
//#region Types
import { SubtaskProps } from "./types";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
//#endregion

const Subtask = ({ subtask }: SubtaskProps) => {
    const { name, checked } = subtask;
    const [isChecked, setIsChecked] = useState(checked);
    //GNOMO TEST
    const [subtaskText, setSubtaskText] = useState(name);
    const getClassName = () => {
        const classList = [];
        isChecked && classList.push("checked");
        return classList.join(" ");
    };
    return (
        <Container className={getClassName()} justify="space-between" align="center" padding="8px 15px">
            <FlexFlow gap="12px" align="center">
                <Check className={getClassName()} onClick={() => setIsChecked(prev => !prev)}>
                    <Icon icon={isChecked ? "material-symbols:check-circle" : "gg:check-o"} />
                </Check>
                <CustomTextField value={subtaskText}/>
            </FlexFlow>
            <Skull>
                <Icon icon="ion:skull" />
            </Skull>
        </Container>
    );
};

export default Subtask;
