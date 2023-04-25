import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>GQ-IMPORTADO</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/lista/create' element={<EmpCreate />}></Route>
          <Route path='/lista/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
