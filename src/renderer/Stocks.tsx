import { useState } from 'react';
import Search from './Search';
import {
  searchStockSymbol,
  stockSelectOptionsFrom,
} from '../main/alphavantage';
import StockList from './StockList';
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
      (symbol: StockSymbol) => symbol.value !== symbolToRemove.value
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

      <StockList symbols={symbols} handleRemoveSymbol={removeSymbol} />
    </div>
  );
};

export default Stocks;
