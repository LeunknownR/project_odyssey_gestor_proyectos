import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";
import { Dates } from "./styles";
import { PeriodProps } from "./types";

const Period = ({
    period,
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: PeriodProps) => {
    return (
        <Row align="center" gap="16px">
            <Dates>
                <b>Período</b> {period}
            </Dates>
            {currentUserIsProjectLeader && (
                <CustomButton
                    content="Finalización"
                    icon="material-symbols:edit"
                    size="supersmall"
                    onClick={openUpdateDateModal}
                />
            )}
        </Row>
    );
};

export default Period;
