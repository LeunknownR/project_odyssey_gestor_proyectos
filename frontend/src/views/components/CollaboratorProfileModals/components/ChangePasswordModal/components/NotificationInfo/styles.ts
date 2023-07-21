import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow)`
    padding: 9px 12px;
    align-items: center;
    background-color: var(--cream-1);
    border-radius: 10px;
    color: var(--darkblue-2);
    font-size: 13px;
    align-items: center;
    gap: 5px;
    .iconify {
        font-size: 24px;
        color: var(--darkblue-2);
    }
`;