import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;
export const Project = styled.header`
    display: flex;
    align-items: center;
    gap: 14px;
`;
export const IconContainer = styled.span`
    .iconify {
        font-size: 46px;
        background-color: var(--green-1);
        color: var(--white-1);
    }
`;
export const ProjectName = styled.h2`
    font-size: 34px;
    color: var(--white-1);
`;
export const Description = styled.p`
    font-size: 16px;
    width: 85%;
    color: var(--white-1);
`;