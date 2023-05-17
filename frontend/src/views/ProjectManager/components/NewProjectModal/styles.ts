import styled from 'styled-components';

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: var(--darkblue-2);
    padding: 72px 0 100px;
`;
export const Title = styled.h1`
    font-size: 34px;
    color: var(--white-1);
`;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 85px 0 70px;
`;
export const CloseBtn = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 25px 35px 0 0;
    .iconify {
        width: max-content;
        font-size: 34px;
        color: var(--darkblue-1);
    }
`;
