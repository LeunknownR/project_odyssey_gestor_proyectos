import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeStateButton, CloseMenu, Container, DeleteButton } from "./styles";
import { HeaderProps } from "./types";
import TaskNameField from "./components/TaskNameField/TaskNameField";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { FlexFlow } from "src/components/styles";

const Header = ({
    form,
    name,
    doUpdateTask,
    openModalDeleteTask,
    openChangeStateModal
}: HeaderProps) => {
    const { isMobile } = useMainContext();
    const { canEditTask, hideEditTaskForm } = useTaskBoardContext();
    return (
        <Container>
            <FlexFlow wrap="nowrap" align="center" gap="10px" width="100%">
                {isMobile && (
                    <CloseMenu onClick={hideEditTaskForm}>
                        <Icon icon="ion:chevron-back" />
                    </CloseMenu>
                )}
                <TaskNameField
                    form={form}
                    name={name}
                    doUpdateTask={doUpdateTask}
                />
            </FlexFlow>
            {canEditTask && 
                <FlexFlow gap="10px">
                    {isMobile && 
                        <ChangeStateButton 
                            icon="fa6-solid:pen" 
                            onClick={openChangeStateModal} />}
                    <DeleteButton icon="ion:skull" onClick={openModalDeleteTask} />
                </FlexFlow>
            }
        </Container>
    );
};

export default Header;
