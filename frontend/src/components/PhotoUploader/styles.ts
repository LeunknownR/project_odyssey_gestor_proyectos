import styled from "styled-components";
import { FlexFlow } from "../styles";
import CustomButton from "../CustomButton/CustomButton";
import UserImage from "src/views/components/UserImage/UserImage";

export const Container = styled(FlexFlow)`
    position: relative;
    align-self: flex-start;
`;
export const DeleteImageBtn = styled(CustomButton)`
    background: transparent;
    padding: 0;
    color: var(--red-2);
    position: absolute;
    right: 0;
    .iconify {
        border-radius: 50%;
        padding: 5px;
        font-size: 33px;
        background-color: var(--darkblue-3);
    }
`;
export const CollaboratorImage = styled(UserImage)`
    font-size: 55px;
`;
export const UploadBtn = styled(CustomButton)`
    background-color: transparent;
    color: var(--darkblue-0);
    font-weight: 700;
    font-size: 18px;
    align-items: center;
    padding: 0;
    :hover {
        color: var(--white-1);
    }
    .iconify {
        display: flex;
        font-size: 32px;
    }
`;
