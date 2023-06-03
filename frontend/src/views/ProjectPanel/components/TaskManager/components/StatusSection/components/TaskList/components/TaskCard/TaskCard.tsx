import { FlexFlow } from "src/components/styles";
import {
    Container,
    DateText,
    IconContainer,
    StateSwordTag,
    TaskCardName,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserImage from "src/views/components/UserImage/UserImage";
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
            <FlexFlow align="center" gap="10px">
                <IconContainer>
                    <Icon icon="gg:check-o" />
                </IconContainer>
                <TaskCardName>{FAKE_DATA.TaskName}</TaskCardName>
            </FlexFlow>
            <FlexFlow justify="space-between">
                <FlexFlow gap="12px" align="center">
                    <UserImage
                        name={FAKE_DATA.name}
                        surname={FAKE_DATA.surname}
                        urlPhoto={FAKE_DATA.urlPhoto}
                        className="small"
                    />
                    <DateText>{FAKE_DATA.TaskDate}</DateText>
                </FlexFlow>
                <StateSwordTag src={STATE_SWORD[FAKE_DATA.state]} />
            </FlexFlow>
        </Container>
    );
};

export default TaskCard;
