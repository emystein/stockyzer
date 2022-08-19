import StockSymbol from '../main/stockSymbol';
import StockTableRow from './StockTableRow';
import { timeSeriesDaily } from '../main/alphavantage';

interface StockTableProps {
  symbols: StockSymbol[];
  handleRemoveSymbol: any;
}

const StockTable = ({ symbols, handleRemoveSymbol }: StockTableProps) => {
  return (
    symbols.length > 0 && (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Daily Price</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((symbol: StockSymbol) => (
            <StockTableRow
              key={symbol.value}
              symbol={symbol}
              handleRemove={handleRemoveSymbol}
              timeSeriesFunction={timeSeriesDaily}
            />
          ))}
        </tbody>
      </table>
    )
  );
};

export default StockTable;
