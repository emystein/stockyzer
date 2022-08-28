import { useEffect, useState } from 'react';
import Search from './Search';
import {
  searchStockSymbol,
  stockSelectOptionsFrom,
} from '../main/alphavantage';
import StockTable from './StockTable';
import StockSymbol from '../main/stockSymbol';
import StockStore from '../main/stockStore';

interface StocksProps {
  stockStore: StockStore;
}

const Stocks = ({ stockStore }: StocksProps) => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    stockStore.getSymbols().then((symbols) => setSymbols(symbols));
  }, [stockStore]);

  const persistSymbols = (symbolsToPersist: StockSymbol[]) => {
    stockStore.persistSymbols(symbolsToPersist);
    setSymbols(symbolsToPersist);
  };

  const addSelectedSymbolToList = (symbolToAdd: StockSymbol) => {
    setSelectedSymbol(symbolToAdd);

    if (symbolToAdd && !symbols.includes(symbolToAdd)) {
      persistSymbols(symbols.concat(symbolToAdd));
    }
  };

  const removeSymbol = (symbolToRemove: StockSymbol) => {
    const updatedSymbols = symbols.filter(
      (symbol: StockSymbol) => symbol !== symbolToRemove
    );

    persistSymbols(updatedSymbols);
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
