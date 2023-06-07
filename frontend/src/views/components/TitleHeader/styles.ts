import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-self: center;
  width: 100%;
  border-bottom: 1px solid var(--white-1);
`;
export const Title = styled.h3`
  font-size: 20px;
  color: var(--white-1);
  padding-bottom: 10px;
  padding-left: 13px; 
  @media (max-width: ${MOBILE_WIDTH}px) {
      padding-left: 1px;
  }
`;