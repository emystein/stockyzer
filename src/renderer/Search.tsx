import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { searchStockSymbol, stockSelectOptionsFrom } from '../main/alphavantage';

const Search = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await searchStockSymbol(searchKeywords);

    return {options: stockSelectOptionsFrom(response)};
  };

  return (
    <div className="Main">
      <AsyncPaginate
        autoFocus
        value={selectedStock}
        loadOptions={loadOptions}
        onChange={setSelectedStock}
        debounceTimeout={1000}
      />
    </div>
  );
};

export default Search;
