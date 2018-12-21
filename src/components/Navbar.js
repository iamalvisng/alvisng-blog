import React from 'react';
import { Flex } from 'rebass';
// eslint-disable-next-line
import { StyledLink } from './styled';
import Logo from './icons/Logo';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <Flex
          mt={[2]}
          p={[2]}
          flexDirection={['column']}
          alignItems={['center']}
        >
          <Flex justifyContent={['center']} mb={[3]} style={{ height: 20 }}>
            <Logo />
          </Flex>

          <Flex width={1} justifyContent={['space-between']}>
            {/* eslint-disable-next-line */}
            <StyledLink>Product</StyledLink>
            {/* eslint-disable-next-line */}
            <StyledLink>Development</StyledLink>
            {/* eslint-disable-next-line */}
            <StyledLink>Perspective</StyledLink>
          </Flex>
        </Flex>
      </nav>
    );
  }
};

export default Navbar;
