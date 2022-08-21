import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personal from './Personal';
import Billing from './Billing';
import CompletePurchase from './Complete';
import PurchaseCompleted from './Successful';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className='container'>
          <Routes>
            <Route path='/assessment-task' exact element={<Personal/>}/>
            <Route path='/billing' exact element={<Billing/>}/>
            <Route path='/payment' exact element={<CompletePurchase/>}/>
            <Route path='/completed' exact element={<PurchaseCompleted/>}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
