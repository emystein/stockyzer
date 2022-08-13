import {useState} from 'react';
import Search from './Search';
import {searchStockSymbol, stockSelectOptionsFrom,} from '../main/alphavantage';
import UnorderedList from './UnorderedList';

const Stocks = () => {
  const [selected, setSelected] = useState(null);
  const [list, setList] = useState([]);

  const addSelectedToList = () => {
    if (selected) {
      setList(list.concat(selected));
    }
  };

  return (
    <div className="Main">
      <Search
        search={searchStockSymbol}
        selectOptionMap={stockSelectOptionsFrom}
        selected={selected}
        setSelected={setSelected}
      />

      <button onClick={addSelectedToList}>Add</button>

      <UnorderedList items={list} />
    </div>
  );
};

export default Stocks;
