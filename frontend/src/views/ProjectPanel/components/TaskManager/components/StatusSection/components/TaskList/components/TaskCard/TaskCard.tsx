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
import { useState } from "react";
import { TaskCardProps } from "./types";
import TaskPriorityNullImage from "src/images/test2.svg"

const FAKE_DATA = {
    TaskName: "Taxi a one",
    MemberPhoto: null,
    TaskDate: "40 de abril",
    name: "Edgar",
    surname: "Peña",
    urlPhoto: null,
    state: null,
};

const TaskCard = ({ taskInfo }: TaskCardProps) => {
    const {checked} = taskInfo;
    const [isChecked, setIsChecked] = useState(checked);
    const getClassName = () => {
        const classList = [];
        isChecked && classList.push("checked");
        return classList.join(" ");
    };
    return (
        <Container className={getClassName()}>
            <FlexFlow align="center" gap="10px">
                <IconContainer onClick={() => setIsChecked(prev => !prev)}>
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
                <StateSwordTag src={TaskPriorityNullImage} />
            </FlexFlow>
        </Container>
    );
};

export default TaskCard;
