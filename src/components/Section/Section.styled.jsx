import styled from '@emotion/styled';

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.space[5]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;
