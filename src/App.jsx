import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";


function App() {
  
  const [workers,setWorkers] = useState([]);
  
  return (
    <div className="App">
      <h1 className=" text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
       <AddWorker setWorkers={setWorkers}/>
       <WorkerList workers={workers}/>
    </div>
  );
}

export default App;
