import { Container as CustomButton } from 'src/components/CustomButton/styles';
import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow)`
    translate: 77%;
`;
type ButtonProps = {
    className: any;
}
export const SlideButton = styled(CustomButton)<ButtonProps>`
    background-color: var(--darkblue-1);
    color: var(--white-1);
    border-radius: 5px 0 0 5px;
    padding: 5px 6px;
    transition: 0.4s;
    .iconify {
        font-size: 26px;
    }
    &.inactive {
        translate: 100%;
    }
`;
export const Wrapper = styled(FlexFlow)<ButtonProps>`
    transition: 0.4s;
    &.active {
        translate: -100%;
        visibility: visible;
        display: flex;
    }
`;
export const DeleteButton = styled(CustomButton)`
    border-radius: 5px 0 0 5px;
    background-color: var(--red-2);
    color: var(--white-1);
    padding: 5px 20px;
    .iconify {
        font-size: 24px;
    }
`;
export const SaveButton = styled(CustomButton)`
    border-radius: 0;
    background-color: #00A896;
    color: var(--white-1);
    padding: 5px 20px;
    .iconify {
        font-size: 24px;
    }
`;  