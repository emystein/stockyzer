import { Props } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';

interface Props {
  symbol: StockSymbol;
  handleRemove: any;
}

const StockListItem = ({ symbol, handleRemove }: Props) => {
  return (
    <tr>
      <td className="stock-symbol-label">{symbol.label}</td>

      <td>
        <button type="button" onClick={() => handleRemove(symbol)}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default StockListItem;
