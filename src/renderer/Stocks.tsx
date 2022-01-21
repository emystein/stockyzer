import Search from './Search';
import { searchStockSymbol, stockSelectOptionsFrom } from '../main/alphavantage';

const Stocks = () => {
  return (
    <div className="Main">
      <Search
        search={searchStockSymbol}
        selectOptionMap={stockSelectOptionsFrom}
      />
    </div>
  );
};

export default Stocks;
