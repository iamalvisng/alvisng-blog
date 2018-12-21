import styled from 'styled-components';

// eslint-disable-next-line
export const TextBlock = styled.p`
  color: ${props => props.theme.colors.textDefault};
  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.small}px;
`;

export const Display = styled.h1`
  color: ${props => props.theme.colors.colorRed};
`;
