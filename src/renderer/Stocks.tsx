import {useState} from 'react';
import Search from './Search';
import {searchStockSymbol, stockSelectOptionsFrom,} from '../main/alphavantage';
import UnorderedList from './UnorderedList';

const Stocks = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [symbols, setSymbols] = useState([]);

  const addSelectedSymbolToList = () => {
    if (selectedSymbol) {
      setSymbols(symbols.concat(selectedSymbol));
    }
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

      <UnorderedList items={symbols} />
    </div>
  );
};

export default Stocks;
