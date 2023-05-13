import styled from 'styled-components';

export const Container = styled.header`
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--darkblue-3);
    padding: 15px 50px 15px 30px;
    gap: 180px;
    z-index: 1000;
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
export const User = styled.div`
    background-color: var(--cream-1);
    padding: 8px;
    border-radius: 50%;
    color: var(--dark-1);
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
`;