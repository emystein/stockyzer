import { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import Plot from 'react-plotly.js';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';

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
        <Plot
          data={[
            {
              x: timeSeries.dates,
              y: timeSeries.values,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'green' },
            },
          ]}
          layout={{ width: 650, height: 350, title: 'Time Series' }}
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
