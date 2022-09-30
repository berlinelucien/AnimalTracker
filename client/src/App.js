import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import AnimalDB from './Pages/AnimalDB';
import Individuals from './Pages/Individuals';
import JoinTable from './components/JoinTable';
import MyReports from './Pages/MyReports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="database" element={<AnimalDB />} />
        </Routes>
        <Routes>
          <Route path="scientist" element={<Individuals />} />
        </Routes>
        <Routes>
          <Route path="joinTable" element={<JoinTable />} />
        </Routes>
        <Routes>
          <Route path="myReports" element={<MyReports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
