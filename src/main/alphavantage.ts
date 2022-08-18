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

export const stockSelectOptionsFrom = (matches: any[]) =>
  matches.map((match) => new StockSymbol(match['1. symbol'], match['2. name']));

const timeSeriesFrom = (alphavantageTimeSeries: any[], priceAt: string) => {
  const dates = Object.keys(alphavantageTimeSeries);
  const values = Object.values(alphavantageTimeSeries).map(
    (value) => value[priceAt]
  );
  return new TimeSeries(dates, values);
};

export const timeSeriesDaily = (symbol: StockSymbol) => {
  return alphavantage.data.daily(symbol.value).then((response) => {
    return timeSeriesFrom(response['Time Series (Daily)'], '4. close');
  });
};
