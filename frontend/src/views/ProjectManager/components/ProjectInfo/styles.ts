import styled from "styled-components";

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
    color: var(--darkblue-2);
    max-width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.create {
        color: var(--darkblue-2);
    }
    &.update {
        color: var(--white-1);
    }
`;
export const Description = styled.p`
    font-size: 16px;
    width: 85%;
    max-width: 365px;
    overflow: hidden;
    text-align: center;
    &.create {
        color: var(--dark-2);
    }
    &.update {
        color: var(--white-1);
    }
`;
