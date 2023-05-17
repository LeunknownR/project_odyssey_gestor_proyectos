import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--darkblue-2);
    padding: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
`;
export const TitleModal = styled.h1`
    font-size: 30px;
    color: var(--white-1);
    font-weight: bold;
    margin: 0 auto;
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 34px;
    }
`;
