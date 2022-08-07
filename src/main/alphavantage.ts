import axios from 'axios';

const apiKey = process.env.ALPHAVANTAGE_API_KEY;

const searchUrl = (keywords: string) => {
  return `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
};

export const searchStockSymbol = async (keywords: string) => {
  if (!keywords.trim()) {
    return {
      data: [],
    };
  }

  return axios.get(searchUrl(keywords));
};

export const stockSelectOptionsFrom = (response) =>
  response.data.bestMatches.map(matchToSelectOption());

const matchToSelectOption = () => (match) => ({
  value: match['1. symbol'],
  label: match['2. name'],
});
