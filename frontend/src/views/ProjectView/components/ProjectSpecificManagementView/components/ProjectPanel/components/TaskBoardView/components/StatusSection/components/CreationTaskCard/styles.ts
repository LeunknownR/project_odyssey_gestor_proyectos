import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 18px;
    background-color: rgba(112, 112, 112, 0.3373);
    border: 1px solid var(--gray-1);
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    :hover {
        border-color: var(--white-1);
    }
`;
export const TransparentTextField = styled(CustomTextArea)`
    padding: 0;
    color: var(--white-1);
    font-weight: 700;
    font-size: 17px;
    min-height: min-content;
`;
export const TaskCardName = styled.h3`
    font-size: 17px;
    font-weight: 700;
    align-self: center;
    color: var(--white-1);
`;
export const UnselectedResponsible = styled.img``;
export const EmptyTaskPriority = styled.img`
    width: 100px;
`;
