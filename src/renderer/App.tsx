import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          Stocks
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
      <Sidebar />
      <Outlet />
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
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="stocks" element={<Stocks />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="analysis" element={<Analysis />} />
        </Route>
      </Routes>
    </div>
  );
}
