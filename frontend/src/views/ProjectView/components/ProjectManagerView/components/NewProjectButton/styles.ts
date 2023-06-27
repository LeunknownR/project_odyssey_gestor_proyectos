import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    bottom: 90px;
    right: 20px;
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    background-color: var(--orange-3);
    color: var(--white-1);
    outline: none;
    border: none;
    border-radius: 16px;
    padding: 8px 15px;
    font-size: 18px;
    .iconify {
        font-size: 20px;
    }
`;