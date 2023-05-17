import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: grid;
    gap: 10px;
    position: fixed;
    left: 0;
    bottom: 15%;
    z-index: 1000;
    padding: 15px 13px 55px 50px;
    background-color: var(--dark-2);
    transition: 0.4s;
    translate: -105%;
    border: 1px solid var(--white-1);
    border-radius: 0px 5px 5px 0px;
    border-top: 8px solid #4BF097;
    &.visible {
        translate: 0;
    }
`;
export const CloseIconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .iconify {
        font-size: 24px;
        color: var(--white-1-50);  
        cursor: pointer;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 24px;
        color: var(--white-1-50);
    }
`;
export const TitleModal = styled.h3`
    font-size: 20px;
    color: #4BF097;
    font-weight: 700;
    text-align: start;
`;
export const TextModal = styled.p`
    font-size: 18px;
    width: 100%;
    font-weight: 300;
    color: var(--white-1-50);
`;