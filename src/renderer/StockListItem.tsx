import { Props } from 'react';
import StockSymbol from '../main/stockSymbol';

interface Props {
  symbol: StockSymbol;
  handleRemove: any;
}

const StockListItem = ({ symbol, handleRemove }: Props) => {
  return (
    <li key={symbol.value}>
      <span>{symbol.label}</span>

      <span>
        <button type="button" onClick={() => handleRemove(symbol)}>
          Remove
        </button>
      </span>
    </li>
  );
};

export default StockListItem;
