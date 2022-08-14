import {useState} from 'react';
import Search from './Search';
import {searchStockSymbol, stockSelectOptionsFrom,} from '../main/alphavantage';
import StockList from './StockList';

const Stocks = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [symbols, setSymbols] = useState([]);

  const addSelectedSymbolToList = () => {
    if (selectedSymbol) {
      setSymbols(symbols.concat(selectedSymbol));
    }
  };

  const removeSymbol = (symbolValue) => {
    const updatedSymbols = symbols.filter(
      (symbol) => symbol.value !== symbolValue
    );

    setSymbols(updatedSymbols);
  };

  return (
    <div className="Main">
      <Search
        search={searchStockSymbol}
        selectOptionMap={stockSelectOptionsFrom}
        selected={selectedSymbol}
        setSelected={setSelectedSymbol}
      />

      <button onClick={addSelectedSymbolToList}>Add</button>

      <StockList symbols={symbols} handleRemoveSymbol={removeSymbol} />
    </div>
  );
};

export default Stocks;
