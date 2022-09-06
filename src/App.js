import logo from './logo.svg';
import './App.css';
import BookTable from './BookTable';
import { Header } from './components/Header';
import BookTableFetch from './BookTableFetch';
import Home from './pages/Home';
import FormBook from './pages/FormBook';
import NoPage from './components/NoPage';
import {
  Routes,
  Route
} from "react-router-dom";
import Table from './pages/Table';
import RoutesConfig from './components/RoutesConfig';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        {/* <BookTable />
        <BookTableFetch /> */}
        <RoutesConfig />
      </div>
    </div>
  );
}

export default App;


/*
        <Routes>
          <Route index element={<Home />} />
          <Route path="form" element={<FormBook />} />
          <Route path="table" element={<Table />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
*/