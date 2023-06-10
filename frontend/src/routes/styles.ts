import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - var(--main-sidebar-width));
`;
export const Content = styled.section`
    @media (min-width: 600px) {
        margin-left: var(--main-sidebar-width);
    }
`;