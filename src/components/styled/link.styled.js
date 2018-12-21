import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.linkBase};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

// eslint-disable-next-line
export { StyledLink };
