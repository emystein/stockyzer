import { useEffect, useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import TimeSeriesChart from './TimeSeriesChart';
import ChartLayout from './chartLayout';

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

  if (timeSeries.hasData()) {
    return (
      <TimeSeriesChart
        timeSeries={timeSeries}
        layout={new ChartLayout(600, 300, '')}
      />
    );
  }

  return (
    <div className="time-series-retry-container">
      <button
        className="time-series-retry-button"
        type="button"
        onClick={resolveTimeSeries}
      >
        <BsArrowRepeat />
      </button>
    </div>
  );
};

export default StockTimeSeriesChart;
