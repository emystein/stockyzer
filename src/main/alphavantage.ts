import axios from 'axios';
import StockSymbol from './stockSymbol';
import TimeSeries from './timeSeries';

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

export const timeSeriesDaily = (symbol: StockSymbol) => {
  const timeSeriesDailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol.value}&apikey=${apiKey}`;

  return axios.get(timeSeriesDailyUrl).then((response) => {
    const xValues: any[] = [];
    const yValues: any[] = [];

    const dailyTimeSeries = response.data['Time Series (Daily)'];

    for (const key in dailyTimeSeries) {
      xValues.push(key);
      yValues.push(dailyTimeSeries[key]['1. open']);
    }

    return new TimeSeries(xValues, yValues);
  });
};
