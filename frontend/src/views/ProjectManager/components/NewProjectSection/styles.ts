import styled from "styled-components";

export const NewProjectButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-1);
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
        .iconify {
            color: var(--orange-3);
        }
    }
    .iconify {
        transition: 0.2s;
        font-size: 32px;
    }
`;