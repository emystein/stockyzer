import { useState } from 'react';
import Search from './Search';
import {
  searchStockSymbol,
  stockSelectOptionsFrom,
} from '../main/alphavantage';

const Stocks = () => {
  const [list, setList] = useState([]);

  const addSelectedToList = (selected) => {
    if (selected) {
      setList(list.concat(selected));
    }
  };

  return (
    <div className="Main">
      <Search
        search={searchStockSymbol}
        selectOptionMap={stockSelectOptionsFrom}
        addSelectedToList={addSelectedToList}
      />

      <ul className="list-group">
        {list.map((item) => (
          <li key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;
