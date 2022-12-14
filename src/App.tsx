import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Menu } from './Pages/Menu/Menu';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/menu"} element={<Menu/>} />
        <Route path={"/dashboard"} element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
