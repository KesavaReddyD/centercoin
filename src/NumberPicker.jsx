import React, { useState } from 'react';

const NumberPicker = () => {
  const [initialNumbers, setInitialNumbers] = useState([]);
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isFirstStep, setIsFirstStep] = useState(true);

  const pickInitialNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 2) {
      numbers.add(Math.floor(Math.random() * 60) + 1);
    }
    setInitialNumbers(Array.from(numbers));
    setIsFirstStep(false);
    setPickedNumber(null);
  };

  const pickNumber = () => {
    let availableNumbers = Array.from({ length: 60 }, (_, i) => i + 1)
      .filter(num => !initialNumbers.includes(num));
    
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    setPickedNumber(availableNumbers[randomIndex]);
  };

  const resetGame = () => {
    setInitialNumbers([]);
    setPickedNumber(null);
    setIsFirstStep(true);
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: 'white'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px' }}>Number Picker Game</h2>
      
      {isFirstStep ? (
        <div>
          <p style={{ marginBottom: '15px' }}>Step 1: Pick two initial numbers (1-60)</p>
          <button 
            onClick={pickInitialNumbers}
            style={{
              ...buttonStyle,
              backgroundColor: '#3498db',
              color: 'white'
            }}
          >
            Pick Initial Numbers
          </button>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>Initial Numbers:</p>
            <p style={{ fontSize: '24px' }}>{initialNumbers.join(', ')}</p>
          </div>
          
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Step 2: Pick a number (excluding initial numbers)
            </p>
            <button 
              onClick={pickNumber}
              style={{
                ...buttonStyle,
                backgroundColor: '#2ecc71',
                color: 'white'
              }}
            >
              Pick Number
            </button>
            
            {pickedNumber && (
              <div style={{ marginTop: '20px' }}>
                <p style={{ fontWeight: 'bold' }}>Picked Number:</p>
                <p style={{ fontSize: '24px' }}>{pickedNumber}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      <button 
        onClick={resetGame}
        style={{
          ...buttonStyle,
          backgroundColor: '#e74c3c',
          color: 'white',
          marginTop: '20px'
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default NumberPicker;