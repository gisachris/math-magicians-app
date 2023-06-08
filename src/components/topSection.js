import React from 'react';
import propTypes from 'prop-types';

const TopSection = ({ initial, handleInputChange, CalculatorData }) => {
  const display = () => {
    const { total, next, operation } = CalculatorData;
    let show = '';
    if (total) {
      show += total;
    }

    if (operation) {
      show += operation;
    }

    if (next) {
      show += next;
    }

    return show;
  };

  return (
    <section className="answer">
      <span className="answerSlot">{display()}</span>
      <input type="text" className="input" id="input" placeholder={initial} value={CalculatorData.next || 0} onChange={handleInputChange} />
    </section>
  );
};

TopSection.propTypes = {
  initial: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  CalculatorData: propTypes.shape({
    total: propTypes.string,
    operation: propTypes.string,
    next: propTypes.string,
  }).isRequired,
};

export default TopSection;
