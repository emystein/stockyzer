import alphavantage_factory from 'alphavantage';
import StockSymbol from './stockSymbol';
import TimeSeries from './timeSeries';

const apiKey = process.env.ALPHAVANTAGE_API_KEY || '';

const alphavantage = alphavantage_factory({ key: apiKey });

export const searchStockSymbol = async (keywords: string) => {
  if (!keywords.trim()) {
    return {};
  }

  return alphavantage.data
    .search(keywords)
    .then((response) => response.bestMatches);
};

const matchToSelectOption = () => (match) => ({
  value: match['1. symbol'],
  label: match['2. name'],
});

export const stockSelectOptionsFrom = (symbols) =>
  symbols.map(matchToSelectOption());

export const timeSeriesDaily = (symbol: StockSymbol) => {
  return alphavantage.data.daily(symbol.value).then((response) => {
    const timeSeries = response['Time Series (Daily)'];
    const dates = Object.keys(timeSeries);
    const values = Object.values(timeSeries).map((value) => value['4. close']);
    return new TimeSeries(dates, values);
  });
};
