import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, description }) => (
  <div>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Tag.defaultProps = {
  description: 'This tag has not content',
};

export default Tag;

