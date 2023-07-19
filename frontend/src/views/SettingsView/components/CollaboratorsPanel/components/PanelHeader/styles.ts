import CustomButton from 'src/components/CustomButton/CustomButton';
import styled from 'styled-components';

export const AddNewCollaboratorBtn = styled(CustomButton)`
    background: transparent;
    color: var(--white-1);
    .iconify {
        font-size: 32px;
        border-radius: 50%;
        transition: 0.3s;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;