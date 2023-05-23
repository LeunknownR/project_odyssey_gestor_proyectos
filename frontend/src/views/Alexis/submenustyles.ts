import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: none;
  position: absolute;
  left: -84px;
  background-color: var(--gray-1);
  border: 1px solid var(--gray-1);
  border-radius: 2px;
`;

export const AllSubMenuContainer = styled.div`
  display: none;
  background-color: var(--gray-1);
  border: 1px solid var(--gray-1);
  border-radius: 2px;
  position: absolute;
  right: 150px;
`;

export const SubMenuOptionEdit = styled.div`
  padding: 14.5px 12.4px 9px 17px;
  color: var(--dark-1);
  font-weight: bold;
  font-size: 12px;
`;

export const SubMenuOptionEliminate = styled.div`
  padding: 8px 12.4px 11px 17px;
  color: var(--red-3);
  font-weight: bold;
  font-size: 12px;
`;


