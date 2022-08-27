import { BsFillTrashFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';
import TimeSeries from '../main/timeSeries';
import StockTimeSeriesChart from './StockTimeSeriesChart';

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
  return (
    <tr>
      <td>{symbol.label}</td>

      <td>{StockTimeSeriesChart(symbol, computeTimeSeries)}</td>

      <td>
        <button type="button" onClick={() => handleRemove(symbol)}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default StockTableRow;
