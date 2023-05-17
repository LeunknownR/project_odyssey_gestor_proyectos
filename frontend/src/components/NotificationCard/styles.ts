import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    bottom: 15%;
    z-index: 1000;
    padding: 20px;
    background-color: #fff;
    transition: 0.4s;
    translate: -105%;
    &.visible {
        translate: 0;
    }
`;