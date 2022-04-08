
import './index.css';
import Form from './Form';
import TableShow from './TableShow';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchTable from './SearchTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/TableShow' element={<TableShow/>}/>
       <Route path='/SearchTable' element={<SearchTable />} /> 
      </Routes>
      </BrowserRouter>
     {/* <Form /> */}
     {/* <TableShow/> */}
    </div>
  );
}

export default App;
