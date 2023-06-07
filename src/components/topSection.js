import React from 'react';

const TopSection = (props) => (
  <section className="answer">
    <input type="text" className="input" id="input" placeholder={props.initial} />
  </section>
);

export default TopSection;
