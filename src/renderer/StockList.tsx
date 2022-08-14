import { Props } from 'react';
import StockSymbol from '../main/stockSymbol';
import StockListItem from './StockListItem';

interface Props {
  symbols: StockSymbol[];
  handleRemoveSymbol: any;
}

const StockList = ({ symbols, handleRemoveSymbol }: Props) => {
  return (
    <table>
      <tbody>
        {symbols.map((symbol: StockSymbol) => (
          <StockListItem
            key={symbol.value}
            symbol={symbol}
            handleRemove={handleRemoveSymbol}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StockList;
