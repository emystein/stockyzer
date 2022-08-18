import { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import TimeSeriesChart from './TimeSeriesChart';
import ChartLayout from './chartLayout';

interface StockTableRowProps {
  symbol: StockSymbol;
  handleRemove: any;
  timeSeriesFunction: (symbol: StockSymbol) => Promise<TimeSeries>;
}

const StockTableRow = ({
  symbol,
  handleRemove,
  timeSeriesFunction,
}: StockTableRowProps) => {
  const [timeSeries, setTimeSeries] = useState(new TimeSeries([], []));

  useEffect(() => {
    const resolveTimeSeriesPromise = async () => {
      setTimeSeries(await timeSeriesFunction(symbol));
    };
    resolveTimeSeriesPromise();
  }, [symbol, timeSeriesFunction]);

  return (
    <tr>
      <td>{symbol.label}</td>

      <td>
        <TimeSeriesChart
          timeSeries={timeSeries}
          layout={new ChartLayout(600, 300, 'Time Series')}
        />
      </td>

      <td>
        <button type="button" onClick={() => handleRemove(symbol)}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default StockTableRow;
