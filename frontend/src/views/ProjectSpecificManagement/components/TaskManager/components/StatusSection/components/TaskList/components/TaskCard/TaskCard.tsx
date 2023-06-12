import { FlexFlow } from "src/components/styles";
import {
    Container,
    DateText,
    IconContainer,
    StateSwordTag,
    TaskCardName,
    UnselectedResponsible,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg"
import { useState } from "react";
import { TaskCardProps } from "./types";
import TaskPriorityNullImage from "src/images/test2.svg"

const TaskCard = ({ taskInfo, openTaskMenu }: TaskCardProps) => {
    const {checked, name, responsible, deadline} = taskInfo;
    const [isChecked, setIsChecked] = useState(checked);
    const getClassName = () => {
        const classList = [];
        isChecked && classList.push("checked");
        return classList.join(" ");
    };
    return (
        <Container className={getClassName()} onClick={() => openTaskMenu(taskInfo)}>
            <FlexFlow align="center" gap="10px">
                <IconContainer onClick={() => setIsChecked(prev => !prev)}>
                    <Icon icon="gg:check-o" />
                </IconContainer>
                <TaskCardName>{name}</TaskCardName>
            </FlexFlow>
            <FlexFlow justify="space-between">
                <FlexFlow gap="12px" align="center">
                    {responsible ? 
                        <UserImage
                            name={responsible.name}
                            surname="Peña"
                            urlPhoto={responsible.urlPhoto}
                            className="small"
                        /> : <UnselectedResponsible src={NoResponsible} />}
                    <DateText>{deadline}</DateText>
                </FlexFlow>
                <StateSwordTag src={TaskPriorityNullImage} />
            </FlexFlow>
        </Container>
    );
};

export default TaskCard;
