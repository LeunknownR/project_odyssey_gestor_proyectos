import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    z-index: 900;
    overflow: hidden;
    transition: 0.4s;
    /* translate: 105%; */
    border-left: 1px solid var(--darkblue-0);
    background-color: var(--darkblue-4);
    width: 40%;
`;
export const Content = styled.div`
  
`;