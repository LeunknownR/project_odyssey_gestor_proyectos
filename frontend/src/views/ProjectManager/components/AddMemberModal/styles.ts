import styled from 'styled-components';

export const Container = styled.div`
    padding: 27px 0px 58px 0px; 
    display: flex;
    flex-direction: column;
`;

export const BackgroundTitle = styled.div`
    background-color: var(--darkblue-2);
    padding: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const TitleModal = styled.h1`
    font-size: 30px;
    color: var(--white-1);
    font-weight: bold;
    margin: 0 auto;
`;

export const TextModal = styled.p`
    font-size: 18px;
    color: var(--dark-1);
    font-weight: bold;
    padding-left: 132px;
`;

export const NewMemberIcon = styled.div`
    align-items: center;
    align-self: center;
    justify-content: center;
    padding-top: 98px;
    padding-bottom: 101px;
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

export const ContainerButton1 = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0px 0px 0px 312px;
`;

export const ContainerButton2 = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0px 0px 0px 16px;
`;