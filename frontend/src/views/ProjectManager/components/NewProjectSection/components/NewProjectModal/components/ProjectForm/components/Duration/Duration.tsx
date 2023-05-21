import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { Row } from "src/components/styles";
import { Container, Label } from "./styles";

const Duration = () => {
    return (
        <Container>
            <Label>Duración</Label>
            <Row gap="14px">
                <CustomDatePicker
                    placeholder="Fecha de inicio"
                    availableDays={[1]}
                />
                <CustomDatePicker
                    placeholder="Fecha de finalización"
                    disabled={true}
                    availableDays={[1,2,3,4,5,6,7,8]}
                />
            </Row>
        </Container>
    );
};

export default Duration;
