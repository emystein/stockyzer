import {
  BrowserRouter,
  Link,
  Outlet,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import Stocks from './Stocks';

const Sidebar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          My Stocks
          <Link to="/stocks" />
        </MenuItem>
        <MenuItem>
          Notifications
          <Link to="/notifications" />
        </MenuItem>
        <MenuItem>
          Analysis
          <Link to="/analysis" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

const Notifications = () => {
  return <div className="Main">Notifications</div>;
};

const Analysis = () => {
  return <div className="Main">Analysis</div>;
};

interface AppProps {
  stockStore: StockStore;
}

export default function App({ stockStore }: AppProps) {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/stocks">
          <Stocks stockStore={stockStore} />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/analysis">
          <Analysis />
        </Route>
        <Redirect to="/stocks" />
      </Switch>
    </BrowserRouter>
  );
}
