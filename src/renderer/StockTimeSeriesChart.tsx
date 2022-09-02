import { useEffect, useState } from 'react';
import { BsArrowRepeat, BsFillClockFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import TimeSeriesChart from './TimeSeriesChart';
import ChartLayout from './chartLayout';

const StockTimeSeriesChart = (
  symbol: StockSymbol,
  computeTimeSeries: (symbol: StockSymbol) => Promise<TimeSeries>
) => {
  const [timeSeries, setTimeSeries] = useState(new TimeSeries([], []));
  const [waitingForTimeSeries, setWaitingForTimeSeries] = useState(false);

  const resolveTimeSeries = () => {
    computeTimeSeries(symbol)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .then((timeSeries: TimeSeries) => setTimeSeries(timeSeries))
      .catch(() => setTimeSeries(new TimeSeries([], [])));
  };

  useEffect(() => {
    resolveTimeSeries();
  }, [symbol, computeTimeSeries]);

  const retryLoadTimeSeries = () => {
    setWaitingForTimeSeries(true);
    resolveTimeSeries();
  };

  if (timeSeries.hasData()) {
    return (
      <TimeSeriesChart
        timeSeries={timeSeries}
        layout={new ChartLayout(600, 300, '')}
      />
    );
  }

  if (waitingForTimeSeries) {
    return (
      <div className="time-series-retry-container">
        <div className="time-series-retry-button">
          <BsFillClockFill />
        </div>
      </div>
    );
  }

  return (
    <div className="time-series-retry-container">
      <button
        className="time-series-retry-button"
        type="button"
        onClick={retryLoadTimeSeries}
      >
        <BsArrowRepeat />
      </button>
    </div>
  );
};

export default StockTimeSeriesChart;
