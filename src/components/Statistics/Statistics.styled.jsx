import styled from '@emotion/styled';

export const StatItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.s};

  :last-child {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;
