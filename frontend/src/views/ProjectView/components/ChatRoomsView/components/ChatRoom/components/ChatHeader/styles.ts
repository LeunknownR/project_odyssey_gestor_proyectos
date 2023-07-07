import CustomButton from "src/components/CustomButton/CustomButton";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("header"))`
    align-items: center;
    padding: 15px 50px;
    background-color: var(--darkblue-3);
`;
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ChatTitle = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: var(--white-1);
`;
export const ChatSubtitle = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: var(--white-1);
`;
export const CloseBtn = styled(CustomButton)`
    display: flex;
    background-color: transparent;
    align-items: center;
    align-items: center;
    justify-content: center;
    .iconify {
        font-size: 40px;
        color: var(--white-1);
        border-radius: 100%;
        transition: 0.3s;
        padding: 3px;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;
