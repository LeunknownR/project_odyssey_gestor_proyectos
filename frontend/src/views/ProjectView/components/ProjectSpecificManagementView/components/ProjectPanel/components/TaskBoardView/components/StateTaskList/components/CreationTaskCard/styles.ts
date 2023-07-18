import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 18px;
    background-color: var(--white-opacity-bg-card);
    border: 2px solid var(--gray-1);
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
    ::placeholder {
        color: var(--gray-2);
    }
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
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 70px;
    }
`;
