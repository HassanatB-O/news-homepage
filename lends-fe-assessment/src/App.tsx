import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Dashboard/Details/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/:id" element={<Details/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
