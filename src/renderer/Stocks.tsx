import { useEffect, useState } from 'react';
import { ipcMain } from 'electron';
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

  useEffect(() => {
    const resolvePromise = async () => {
      setSymbols(await ipcMain.invoke('getSymbols'));
    };
    resolvePromise();
  }, [symbols]);

  const persistSymbols = (symbolsToPersist: StockSymbol[]) => {
    ipcMain.invoke('persistSymbols', symbolsToPersist);
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
