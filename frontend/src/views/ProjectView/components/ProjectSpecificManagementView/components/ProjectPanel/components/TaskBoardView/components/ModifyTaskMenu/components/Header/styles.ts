import CustomButton from 'src/components/CustomButton/CustomButton';
import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("header"))`
    background-color: #051E2F;
    padding: 30px 0 30px 30px;
`;
export const DeleteButton = styled(CustomButton)`
    border-radius: 5px 0 0 5px;
    background-color: var(--red-2);
    color: var(--white-1);
    padding: 8px 10px;
    .iconify {
        font-size: 25px;
    }
`;
