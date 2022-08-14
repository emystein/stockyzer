import { Props } from 'react';

const StockListItem = ({ symbol, handleRemove }: Props) => {
  return (
    <li key={symbol.value}>
      {symbol.label}
      <button type="button" onClick={() => handleRemove(symbol.value)}>
        Remove
      </button>
    </li>
  );
};

export default StockListItem;
