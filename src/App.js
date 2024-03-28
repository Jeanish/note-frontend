import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRouter';
import { Navbar } from './components/Homepage/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />

    </div>
  );
}

export default App;