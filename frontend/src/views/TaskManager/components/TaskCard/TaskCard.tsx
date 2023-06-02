import { Row } from "src/components/styles";
import {
    Container,
    DateText,
    IconContainer,
    StateSwordTag,
    TaskCardName,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserImage from "src/views/components/UserImage/UserImage";
import sword from "src/images/low-state-sword.svg";
import { STATE_SWORD } from "./utils/constants";

const FAKE_DATA = {
    TaskName: "Taxi a one",
    MemberPhoto: null,
    TaskDate: "40 de abril",
    name: "Edgar",
    surname: "Peña",
    urlPhoto: null,
    state: "high"
};

const TaskCard = () => {
    return (
        <Container>
            <Row align="center" gap="10px">
                <IconContainer>
                    <Icon icon="gg:check-o" />
                </IconContainer>
                <TaskCardName>{FAKE_DATA.TaskName}</TaskCardName>
            </Row>
            <Row justify="space-between">
                <Row gap="12px" align="center">
                    <UserImage
                        name={FAKE_DATA.name}
                        surname={FAKE_DATA.surname}
                        urlPhoto={FAKE_DATA.urlPhoto}
                        className="medium"
                    />
                    <DateText>{FAKE_DATA.TaskDate}</DateText>
                </Row>
                <StateSwordTag src={STATE_SWORD[FAKE_DATA.state]} />
            </Row>
        </Container>
    );
};

export default TaskCard;
