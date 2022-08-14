import { useState } from 'react';
import Search from './Search';
import {
  searchStockSymbol,
  stockSelectOptionsFrom,
} from '../main/alphavantage';
import StockTable from './StockTable';
import StockSymbol from '../main/stockSymbol';

const Stocks = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [symbols, setSymbols] = useState([]);

  const addSelectedSymbolToList = (symbolToAdd: StockSymbol) => {
    setSelectedSymbol(symbolToAdd);

    if (symbolToAdd) {
      setSymbols(symbols.concat(symbolToAdd));
    }
  };

  const removeSymbol = (symbolToRemove: StockSymbol) => {
    const updatedSymbols = symbols.filter(
      (symbol: StockSymbol) => symbol !== symbolToRemove
    );

    setSymbols(updatedSymbols);
  };

  return (
    <div className="Main">
      <Search
        search={searchStockSymbol}
        selectOptionMap={stockSelectOptionsFrom}
        selected={selectedSymbol}
        setSelected={addSelectedSymbolToList}
      />

      <StockTable symbols={symbols} handleRemoveSymbol={removeSymbol} />
    </div>
  );
};

export default Stocks;
