import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--darkblue-1);
    font-weight: 700;
    font-size: 17px;
`;
type WrapperProps = {
    ref: any;
}
export const Wrapper = styled.div<WrapperProps>`
  
`;
export const Label = styled.label`
  
`;