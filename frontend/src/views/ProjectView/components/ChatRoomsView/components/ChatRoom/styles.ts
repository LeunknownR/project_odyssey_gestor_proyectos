import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--darkblue-3);
    width: 70%;
    justify-content: center;
    border-top: 1px solid var(--darkblue-4);
`;
export const Content = styled.div`
    display: flex;
    padding: 20px;
`;
export const ChatContentContainer = styled.div`
    display: flex;
    min-width: 100%;
    height: 60vh;
    background: linear-gradient(180deg, var(--darkblue-4) 0%, var(--darkblue-2) 100%);
    border-radius: 10px;
`;