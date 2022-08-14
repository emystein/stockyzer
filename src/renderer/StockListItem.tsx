import { Props } from 'react';

const StockListItem = ({ symbol, handleRemove }: Props) => {
  return (
    <li key={symbol.value}>
      <span>{symbol.label}</span>

      <span>
        <button type="button" onClick={() => handleRemove(symbol.value)}>
          Remove
        </button>
      </span>
    </li>
  );
};

export default StockListItem;
