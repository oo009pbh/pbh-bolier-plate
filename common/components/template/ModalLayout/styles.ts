import styled from '@emotion/styled';
export const CenterModalLayout = styled.dialog`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);

  ::backdrop {
    background-color: var(--black);
    opacity: 0.6;
  }
`;
