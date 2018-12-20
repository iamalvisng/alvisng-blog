import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => (
  // eslint-disable-next-line
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  // eslint-disable-next-line
  content: PropTypes.node,
  // eslint-disable-next-line
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
