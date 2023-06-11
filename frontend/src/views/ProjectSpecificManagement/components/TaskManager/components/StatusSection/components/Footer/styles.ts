import CustomButton from 'src/components/CustomButton/CustomButton';
import styled from 'styled-components';

export const AddTaskButton = styled(CustomButton)`
    background-color: transparent;
    border-radius: 10px;
    color: var(--white-1);
    font-weight: 700;
    gap: 5px;
    .iconify {
        font-size: 24px;
    }
    :hover {
        background-color: var(--white-1-12);
    }
`;