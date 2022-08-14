import { Props } from 'react';
import StockSymbol from '../main/stockSymbol';
import StockTableRow from './StockTableRow';

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
          />
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
