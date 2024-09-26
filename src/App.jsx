import { useState } from "react";
import AddEmployee from "./components/Employees/AddEmployee";
import GetAllEmployees from "./components/Employees/GetAllEmployees";


function App() {
  
  const [employees,setEmployees] = useState([]);
  
  return (
    <div className="App">
      <h1 className=" text-white text-center mt-6 text-3xl">Çalışan Bilgileri</h1>
       <AddEmployee setEmployees={setEmployees}/>
       <GetAllEmployees employees={employees}/>
    </div>
  );
}

export default App;
