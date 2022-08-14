import { Props } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import StockSymbol from '../main/stockSymbol';

interface Props {
  symbol: StockSymbol;
  handleRemove: any;
}

const StockTableRow = ({ symbol, handleRemove }: Props) => {
  return (
    <tr>
      <td>{symbol.label}</td>

      <td>
        <button type="button" onClick={() => handleRemove(symbol)}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default StockTableRow;
