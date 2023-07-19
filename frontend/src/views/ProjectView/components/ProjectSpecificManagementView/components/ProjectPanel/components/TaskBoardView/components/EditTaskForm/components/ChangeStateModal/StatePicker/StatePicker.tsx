import { Container } from "./styles";
import { StatePickerProps } from "./types";

const StatePicker = ({
    data, newState, changeTaskState
}: StatePickerProps) => {
    return (
        <Container
            className={newState === data.state ? "active" : ""}
            justify="center"
            width="100%"
            padding="10px 15px"
            onClick={() => changeTaskState(data.state)}>
            <span>{data.stateName}</span>
        </Container>
    );
};

export default StatePicker;
