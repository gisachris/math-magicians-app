import React, { useState } from 'react';
import TopSection from './topSection';
import SideBar from './sideActions';
import MainActions from './mainActions';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

const AppHolder = () => {
  const [CalculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleclick = (event) => {
    const buttonData = event.target.textContent;
    const updatedCalculatorData = calculate(CalculatorData, buttonData);
    setCalculatorData(updatedCalculatorData);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setCalculatorData((answer) => ({
      ...answer,
      next: inputValue,
    }));
  };

  return (
    <div className="calcWhole" data-testid="calcWhole">
      <h1 className="CalcText">lets do some math!</h1>
      <div className="holderBorder">
        <section className="holder">
          <TopSection
            initial="0"
            handleInputChange={handleInputChange}
            CalculatorData={CalculatorData}
          />
          <MainActions handleclick={handleclick} />
          <SideBar handleclick={handleclick} />
        </section>
      </div>
    </div>
  );
};
export default AppHolder;
