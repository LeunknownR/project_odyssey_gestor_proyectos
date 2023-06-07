import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    .iconify {
        font-size: 74px;
        color: var(--dark-1);
    }
`;
export const Text = styled.p`
    font-size: 14px;
    font-weight: lighter;
    text-align: center;
`;