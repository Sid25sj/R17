
import './index.css';
import Form from './Form';
import TableShow from './TableShow';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Form/>} />
        <Route path='/TableShow' element={<TableShow/>}/>
        
      </Routes>
      </BrowserRouter>
     {/* <Form /> */}
     {/* <TableShow/> */}
    </div>
  );
}

export default App;
