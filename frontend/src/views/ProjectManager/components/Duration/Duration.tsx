import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { Container, DatePickersWrapper, Label } from "./styles";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { DurationProps } from "./types";

const Duration = ({ form, labelColor }: DurationProps) => {
    const {startDate, endDate} = form.value;
    const changeStartDateProjectField = (value: number) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_START.name, value);
    };
    const changeEndDateProjectField = (value: number) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_END.name, value);
    };
    return (
        <Container>
            <Label color={labelColor}>Duración</Label>
            <DatePickersWrapper gap="14px">
                <CustomDatePicker
                    {...TEXT_FIELD_PROPS.PROJECT_START}
                    onChange={changeStartDateProjectField}
                    value={startDate}
                />
                <CustomDatePicker
                    {...TEXT_FIELD_PROPS.PROJECT_END}
                    onChange={changeEndDateProjectField}
                    value={endDate}
                />
            </DatePickersWrapper>
        </Container>
    );
};

export default Duration;
