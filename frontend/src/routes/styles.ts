import styled from 'styled-components';

export const Main = styled.main`
`;
export const Content = styled.section`
    min-height: calc(100vh - var(--main-header-height));
    @media (min-width: 600px) {
        margin-left: var(--main-sidebar-width);
    }
`;