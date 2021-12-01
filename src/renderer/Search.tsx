import {useState, useEffect} from 'react';
import axios from 'axios';

const searchStockSymbol = (keywords: string) => {
  // TODO parameterize
  const apiKey = '2SG3G2I68SLNY6ZL';
  const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
  return axios.get(apiUrl);
};

const Search = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChangeKeywords = (event) => {
    setSearchKeywords(event.target.value);
  };

  const searchOnEvent = (event) => {
    event.preventDefault();
    document.body.style.cursor = 'wait';
    searchStockSymbol(searchKeywords)
      .then((response) => {
        setSearchResults(response.data.bestMatches);
      })
      .catch(() => {
        setSearchResults([]);
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
      <ul>
        {searchResults.map((match) => (
          <li key={match['1. symbol']}>{match['2. name']}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
