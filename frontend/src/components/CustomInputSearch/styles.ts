//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
`;
export const List = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid var(--darkblue-1);
    border-radius: 5px;
    width: 100%;
    top: 45px;
    max-height: 300px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 500px) {
        top: 55px;
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
