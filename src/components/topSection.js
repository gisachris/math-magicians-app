import React from 'react';
import PropTypes from 'prop-types';

const TopSection = ({ initial }) => (
  <section className="answer">
    <input type="text" className="input" id="input" placeholder={initial} />
  </section>
);

TopSection.propTypes = {
  initial: PropTypes.string,
};

TopSection.defaultProps = {
  initial: 0,
};

export default TopSection;
