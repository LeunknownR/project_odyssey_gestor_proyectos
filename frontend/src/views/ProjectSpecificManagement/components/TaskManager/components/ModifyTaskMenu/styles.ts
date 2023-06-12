import styled from 'styled-components';
import { DashedAddButton } from '../../../ProjectDetailsView/components/ProjectTeam/components/Header/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 100;
    overflow: hidden;
    transition: 0.4s;
    translate: 105%;
    border-left: 1px solid var(--darkblue-0);
    background-color: var(--darkblue-4);
    width: 35%;
    &.show {
        translate: 0;
    }
`;
export const AddSubtaskButton = styled(DashedAddButton)`
    align-self: flex-end;
    padding: 6px 12px;
    margin-right: 30px;
    .iconify {
        font-size: 19px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 30px 20px 20px 40px;
    height: 50vh;
    overflow-y: scroll;
`;