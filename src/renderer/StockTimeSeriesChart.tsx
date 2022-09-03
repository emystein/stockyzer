import { useEffect, useState } from 'react';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import TimeSeriesChart from './TimeSeriesChart';
import ChartLayout from './chartLayout';
import ComputationRetry from './ComputationRetry';

const StockTimeSeriesChart = (
  symbol: StockSymbol,
  computeTimeSeries: (symbol: StockSymbol) => Promise<TimeSeries>
) => {
  const [timeSeries, setTimeSeries] = useState(new TimeSeries([], []));

  const resolveTimeSeries = () => {
    computeTimeSeries(symbol)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .then((timeSeries: TimeSeries) => setTimeSeries(timeSeries))
      .catch(() => setTimeSeries(new TimeSeries([], [])));
  };

  useEffect(() => {
    resolveTimeSeries();
  }, [symbol, computeTimeSeries]);

  if (timeSeries.isEmpty()) {
    return <ComputationRetry compute={resolveTimeSeries} />;
  }

  return (
    <TimeSeriesChart
      timeSeries={timeSeries}
      layout={new ChartLayout(600, 300, '')}
    />
  );
};

export default StockTimeSeriesChart;
