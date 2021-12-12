import {BrowserRouter, Switch, Route, Link, Outlet, Redirect} from 'react-router-dom';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import Search from './Search';

const Sidebar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          Search
          <Link to="/search"/>
        </MenuItem>
        <MenuItem>
          My Stocks
          <Link to="/stocks"/>
        </MenuItem>
        <MenuItem>
          Notifications
          <Link to="/notifications"/>
        </MenuItem>
        <MenuItem>
          Analysis
          <Link to="/analysis"/>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Outlet/>
    </div>
  );
};

const Stocks = () => {
  return <div className="Main">Stocks</div>;
};

const Notifications = () => {
  return <div className="Main">Notifications</div>;
};

const Analysis = () => {
  return <div className="Main">Analysis</div>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Switch>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/stocks">
          <Stocks/>
        </Route>
        <Route path="/notifications">
          <Notifications/>
        </Route>
        <Route path="/analysis">
          <Analysis/>
        </Route>
        <Redirect to="/search"/>
      </Switch>
    </BrowserRouter>
  );
}
