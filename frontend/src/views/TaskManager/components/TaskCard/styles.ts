import styled from 'styled-components';

export const Container = styled.div`
    padding: 18px 8px 18px 18px;
    display: flex;
    display: inline-block;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 24px;
    }
`;
export const TaskCardName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    align-self: center;
    color: var(--white-1);
`;
export const MemberPhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    
    background-color: #fff;
`;
export const DateText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: var(--white-1);
`;
export const SwordIconContainer = styled.div`
    width: 75px;
    height: 30px;

    margin-left: 100px;
    background-color: var(--orange-2);

`;