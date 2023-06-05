import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 900;
    overflow: hidden;
    transition: 0.4s;
    /* translate: 105%; */
    border-left: 1px solid var(--darkblue-0);
    background-color: var(--darkblue-4);
    width: 35%;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 30px 20px 20px 40px;
    height: 50vh;
    overflow-y: scroll;
`;