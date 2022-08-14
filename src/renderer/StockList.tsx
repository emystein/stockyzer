import { Props } from 'react';
import StockListItem from "./StockListItem";

const StockList = ({ symbols, handleRemoveSymbol }: Props) => {
  return (
    <ul className="list-group">
      {symbols.map((symbol) => (
        <StockListItem symbol={symbol} handleRemove={handleRemoveSymbol} />
      ))}
    </ul>
  );
};

export default StockList;
