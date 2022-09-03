import { useState } from 'react';
import { BsArrowRepeat, BsFillClockFill } from 'react-icons/bs';

interface StockTimeSeriesRetryProps {
  resolveTimeSeries: () => void;
}

const StockTimeSeriesRetry = ({
  resolveTimeSeries,
}: StockTimeSeriesRetryProps) => {
  const [waitingForTimeSeries, setWaitingForTimeSeries] = useState(false);

  const retryLoadTimeSeries = () => {
    setWaitingForTimeSeries(true);
    resolveTimeSeries();
  };

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

export default StockTimeSeriesRetry;
