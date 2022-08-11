import logo from './logo.svg';
import './App.css';
import BookTable from './BookTable';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <BookTable />
      </div>
    </div>
  );
}

export default App;
