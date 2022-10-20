import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const OptionItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const OptionBtn = styled.button`
  padding: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;

  transition: transform, 250ms;

  :active {
    transform: translateY(3px);
  }
`;
