import React, { useEffect, useState } from 'react';

function CardSymbols({ symbol, value }) {
  useEffect(() => {
    const isNumber = !isNaN(value);
    if (isNumber) {
      const currentSymbolArray = new Array(parseInt(value)).fill(symbol);
      setSymbolArray(currentSymbolArray);
    }
    if (value === 'A') {
      const currentSymbolArray = [symbol];
      setSymbolArray(currentSymbolArray);
    }
  }, [symbol, value]);

  const [symbolArray, setSymbolArray] = useState([]);

  return (
    <div className="symbols">
      {symbolArray.map((symbol, index) => (
        <div key={`${symbol}${value}-${index}`}>{symbol}</div>
      ))}
    </div>
  );
}

export default CardSymbols;
