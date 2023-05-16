import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        background-color: var(--green-1);
        font-size: 50px;
        border-radius: 4px;
    }
`;
export const ProjectName = styled.h1`
    color: var(--white-1);
    font-size: 36px;
`;
export const Description = styled.p`
    color: var(--white-1);
    width: 35%;
    font-weight: 400;
    font-size: 17px;
`;