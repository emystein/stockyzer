import { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import TimeSeriesChart from './TimeSeriesChart';
import ChartLayout from './chartLayout';

interface StockTableRowProps {
  symbol: StockSymbol;
  handleRemove: any;
  computeTimeSeries: (symbol: StockSymbol) => Promise<TimeSeries>;
}

const StockTableRow = ({
  symbol,
  handleRemove,
  computeTimeSeries,
}: StockTableRowProps) => {
  const [timeSeries, setTimeSeries] = useState(new TimeSeries([], []));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    computeTimeSeries(symbol).then((timeSeries: TimeSeries) =>
      setTimeSeries(timeSeries)
    );
  }, [symbol, computeTimeSeries]);

  return (
    <tr>
      <td>{symbol.label}</td>

      <td>
        <TimeSeriesChart
          timeSeries={timeSeries}
          layout={new ChartLayout(600, 300, '')}
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
