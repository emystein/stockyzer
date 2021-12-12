import { useState } from 'react';
import axios from 'axios';
import { AsyncPaginate } from 'react-select-async-paginate';

const searchStockSymbol = async (keywords: string) => {
  const apiKey = process.env.ALPHAVANTAGE_API_KEY;
  const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
  return axios.get(apiUrl);
};

const Search = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const stockSelectOption = () => (match) => ({
    value: match['1. symbol'],
    label: match['2. name'],
  });

  const stockSelectOptionsFrom = (response) =>
    response.data.bestMatches.map(stockSelectOption());

  const loadOptions = async (searchKeywords, loadedOptions) => {
    if (!searchKeywords.trim()) {
      return {options: []};
    }

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
