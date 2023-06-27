import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 40px;
    min-width: 100%;
    background-color: var(--darkblue-2);
`;
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    padding-left: 20px;
`;
export const ChatTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: var(--white-1);
`;
export const ChatSubtitle = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: var(--white-1);
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    margin-left: auto;
    .iconify {
        font-size: 40px;
        color: var(--white-1);
    }
`;
