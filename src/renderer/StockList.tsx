import { Props } from 'react';
import StockSymbol from '../main/stockSymbol';
import StockListItem from './StockListItem';

interface Props {
  symbols: StockSymbol[];
  handleRemoveSymbol: any;
}

const StockList = ({ symbols, handleRemoveSymbol }: Props) => {
  return (
    <ul className="list-group">
      {symbols.map((symbol: StockSymbol) => (
        <StockListItem symbol={symbol} handleRemove={handleRemoveSymbol} />
      ))}
    </ul>
  );
};

export default StockList;
