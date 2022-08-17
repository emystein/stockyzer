import { Props } from 'react';
import StockSymbol from '../main/stockSymbol';
import StockTableRow from './StockTableRow';
import { timeSeriesDaily } from '../main/alphavantage';

interface Props {
  symbols: StockSymbol[];
  handleRemoveSymbol: any;
}

const StockTable = ({ symbols, handleRemoveSymbol }: Props) => {
  return (
    <table>
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
  );
};

export default StockTable;
