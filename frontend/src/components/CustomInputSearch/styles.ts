//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
`;
export const List = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid var(--dark-3);
    border-radius: 5px;
    width: 100%;
    top: 70px;
    @media (max-width: 500px) {
        top: 55px;
    }
`;
export const Item = styled.div`
    color: #858585;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border-top: 1px solid var(--light-3);
    user-select: none;
    :first-child {
        border-radius: 5px 5px 0 0;
        border-top: 1px solid transparent;
    }
    :last-child {
        border-radius: 0 0 5px 5px;
    }
    &.selected,
    :hover {
    }
`;
// export const CleanBtn = styled.button`
//     background: none;
//     border: none;
//     cursor: pointer;
//     color: var(--dark-3);
//     font-weight: 700;
//     font-size: 12px;
//     position: absolute;
//     bottom: 14px;
//     right: 10px;
//     @media (max-width: 590px) {
//         font-size: 11px;
//         bottom: 12px;
//     }
//     @media (max-width: 500px) {
//         font-size: 10px;
//         bottom: 8px;
//         right: 5px;
//     }
// `;
