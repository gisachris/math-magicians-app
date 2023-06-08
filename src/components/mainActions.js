import React from 'react';

const MainActions = ({ handleclick }) => (
  <section className="mainActions">
    <ul className="mainKeys">
      <li className="MainActionTask" onClick={handleclick}>AC</li>
      <li className="MainActionTask" onClick={handleclick}>+/-</li>
      <li className="MainActionTask" onClick={handleclick}>%</li>
      <li className="MainActionTask" onClick={handleclick}>7</li>
      <li className="MainActionTask" onClick={handleclick}>8</li>
      <li className="MainActionTask" onClick={handleclick}>9</li>
      <li className="MainActionTask" onClick={handleclick}>4</li>
      <li className="MainActionTask" onClick={handleclick}>5</li>
      <li className="MainActionTask" onClick={handleclick}>6</li>
      <li className="MainActionTask" onClick={handleclick}>1</li>
      <li className="MainActionTask" onClick={handleclick}>2</li>
      <li className="MainActionTask" onClick={handleclick}>3</li>
      <li className="MainActionTask zeroSpan" onClick={handleclick}>0</li>
      <li className="MainActionTask" onClick={handleclick}>.</li>
    </ul>
  </section>
);

export default MainActions;
