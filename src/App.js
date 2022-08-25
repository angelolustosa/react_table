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

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        {/* <BookTable />
        <BookTableFetch /> */}
        <Routes>
          {/* Componente da tela inicial */}
          <Route index element={<Home />} />
          {/* Componente de uma rota específica */}
          <Route path="form" element={<FormBook />} />
          {/* Componente de uma rota específica */}
          <Route path="table" element={<Table />} />
          {/* Componente para quando não encontrar uma rota */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
