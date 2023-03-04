
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

function App() {
  return (
    <Routes>

       <Route path="/" element={<SearchBar />} />
       <Route path="/weather/:id"  element={<Weather />} />
    
    </Routes>
  );
}

export default App;
