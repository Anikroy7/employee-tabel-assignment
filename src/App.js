
import { Routes, Route } from "react-router-dom";
import AcccessibleTable from './pages/AcccessibleTable';
import EmployeesDetails from './pages/EmployeeDetails';
import HierarchicalDisplay from './pages/HierarchicalDisplay';
import Navbar from './Component/Navbar';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<AcccessibleTable></AcccessibleTable>}></Route>
        <Route path='employee/:id' element={<EmployeesDetails></EmployeesDetails>}></Route>
        <Route path='/hierarchicalDisplay' element={<HierarchicalDisplay></HierarchicalDisplay>}></Route>
      </Routes>
    </div>
  );
}

export default App;
