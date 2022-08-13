import {useState} from 'react';
import Search from './Search';
import {searchStockSymbol, stockSelectOptionsFrom,} from '../main/alphavantage';
import UnorderedList from './UnorderedList';

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

      <UnorderedList items={list} />
    </div>
  );
};

export default Stocks;
