import { Row } from "src/components/styles";
import { Container, DateText, IconContainer, MemberPhotoContainer, SwordIconContainer, TaskCardName } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const FakeData = {
    TaskName: "Taxi a one",
    MemberPhoto: null,
    TaskDate: "40 de abril",
};

const TaskCard = () => {
    return <Container>
        <Row gap="10px" padding="0px 0px 22px 0px">
            <IconContainer>
                <Icon icon="gg:check-o" />
            </IconContainer>
            <TaskCardName>{FakeData.TaskName}</TaskCardName>
        </Row>
        <Row gap="8px">
            <MemberPhotoContainer>{FakeData.MemberPhoto}</MemberPhotoContainer>
            <DateText>{FakeData.TaskDate}</DateText>
            <SwordIconContainer></SwordIconContainer>
        </Row>
    </Container>
};

export default TaskCard;