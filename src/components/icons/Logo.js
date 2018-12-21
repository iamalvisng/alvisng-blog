import React from 'react';

const Logo = props => (
  <svg width="108" height="20" {...props}>
    <title>logo</title>
    <text
      transform="translate(-1 -6)"
      fill="none"
      fillRule="evenodd"
      fontFamily="OperatorMono-Medium, Operator Mono"
      fontSize={19}
      fontWeight={400}
    >
      <tspan x={0} y={20} fill="#495057">
        {'iam'}
      </tspan>
      <tspan x={33} y={20} fill="#82AAFF">
        {'AlvisNg'}
      </tspan>
    </text>
  </svg>
);

export default Logo;
