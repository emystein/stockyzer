import { render } from 'react-dom';
import App from './App';
import StockStore from '../main/stockStore';

const rootElement = document.getElementById('root');

const stockStore = new StockStore();

render(<App stockStore={stockStore} />, rootElement);
