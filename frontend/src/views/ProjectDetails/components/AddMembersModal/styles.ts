import styled from 'styled-components';

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 27px 0px 58px; 
    width: 70%;
    gap: 40px;
`;
export const TextModal = styled.p`
    font-size: 18px;
    color: var(--dark-1);
    font-weight: bold;
`;
export const NewMemberIcon = styled.div`
    align-items: center;
    align-self: center;
    justify-content: center;
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    .iconify {
        font-size: 74px;
        color: var(--dark-1);
    }
`;
export const IconText = styled.p`
    font-size: 14px;
    font-weight: lighter;
`;
export const BlackText = styled.p`
    font-weight: bold;
`;