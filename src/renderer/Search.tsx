import {useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';

const searchStockSymbol = (keywords: string) => {
  // TODO parameterize
  const apiKey = '2SG3G2I68SLNY6ZL';
  const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
  return axios.get(apiUrl);
};

const Search = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [stockSelectOptions, setStockSelectOptions] = useState([]);
  const [selectedStockSymbol] = useState('');

  const handleChangeKeywords = (event) => {
    setSearchKeywords(event.target.value);
  };

  const stockSelectOption = () => (match) => ({
    value: match['1. symbol'],
    label: match['2. name'],
  });

  const stockSelectOptionsFromApiResponse = (response) =>
    response.data.bestMatches.map(stockSelectOption());

  const searchOnEvent = (event) => {
    event.preventDefault();
    document.body.style.cursor = 'wait';
    searchStockSymbol(searchKeywords)
      .then((response) => {
        setStockSelectOptions(stockSelectOptionsFromApiResponse(response));
      })
      .catch(() => {
        setStockSelectOptions([]);
      })
      .finally(() => {
        document.body.style.cursor = 'default';
      });
  };

  return (
    <div className="Main">
      <form onSubmit={searchOnEvent}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="keywords"
            value={searchKeywords}
            onChange={handleChangeKeywords}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <Select options={stockSelectOptions} value={selectedStockSymbol}/>
    </div>
  );
};

export default Search;