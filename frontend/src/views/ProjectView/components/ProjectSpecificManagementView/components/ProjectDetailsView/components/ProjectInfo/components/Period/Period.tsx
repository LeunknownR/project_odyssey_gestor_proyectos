import CustomButton from "src/components/CustomButton/CustomButton";
import { Dates } from "./styles";
import { PeriodProps } from "./types";
import { FlexFlow } from "src/components/styles";

const Period = ({
    period,
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: PeriodProps) => {
    return (
        <FlexFlow align="center" gap="16px">
            <Dates>
                <b>Período</b> {period}
            </Dates>
            {currentUserIsProjectLeader && (
                <CustomButton
                    variant="main"
                    content="Finalización"
                    icon="material-symbols:edit"
                    size="supersmall"
                    onClick={openUpdateDateModal}
                />
            )}
        </FlexFlow>
    );
};

export default Period;
