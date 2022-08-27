import StockSymbol from '../main/stockSymbol';
import StockTableRow from './StockTableRow';
import { timeSeriesDaily } from '../main/alphavantage';

interface StockTableProps {
  symbols: StockSymbol[];
  handleRemoveSymbol: any;
}

const alphabetically = (a: StockSymbol, b: StockSymbol) => {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
};

const StockTable = ({ symbols, handleRemoveSymbol }: StockTableProps) => {
  return (
    symbols.length > 0 && (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Daily Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {symbols.sort(alphabetically).map((symbol: StockSymbol) => (
            <StockTableRow
              key={symbol.value}
              symbol={symbol}
              handleRemove={handleRemoveSymbol}
              computeTimeSeries={timeSeriesDaily}
            />
          ))}
        </tbody>
      </table>
    )
  );
};

export default StockTable;
