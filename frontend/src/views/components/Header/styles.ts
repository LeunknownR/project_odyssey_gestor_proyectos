import styled from "styled-components";

export const Container = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--darkblue-3);
    padding: 15px 50px 15px 30px;
    gap: 180px;
    z-index: 200;
    @media (max-width: 600px) {
        display: none;
    }
`;
export const IconContainer = styled.span`
    cursor: pointer;
    .iconify {
        font-size: 26px;
        color: var(--white-1);
    }
`;
export const TynpuLogo = styled.img`
    height: 45px;
`;
