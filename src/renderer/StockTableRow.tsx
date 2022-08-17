import { Props, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import Plot from 'react-plotly.js';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';

interface Props {
  symbol: StockSymbol;
  handleRemove: any;
  timeSeriesFunction: (symbol: StockSymbol) => Promise<TimeSeries>;
}

const StockTableRow = ({ symbol, handleRemove, timeSeriesFunction }: Props) => {
  const [timeSeries, setTimeSeries] = useState(new TimeSeries([], []));

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    timeSeriesFunction(symbol).then((result: TimeSeries) =>
      setTimeSeries(result)
    );
  }, [symbol, timeSeriesFunction]);

  return (
    <tr>
      <td>{symbol.label}</td>

      <td>
        <Plot
          data={[
            {
              x: timeSeries.xValues,
              y: timeSeries.yValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'green' },
            },
          ]}
          layout={{ width: 600, height: 440, title: 'Time Series' }}
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
