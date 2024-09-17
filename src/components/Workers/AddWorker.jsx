import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";

const AddWorker = () => {
  
   const [workerName, setWorkerName] = useState("");
   const [salary, setSalary] = useState("");

   const workerNameChangeHandler = (e) => {
     setWorkerName(e.target.value);
   }
   const salaryChangeHandler = (e) => {
     setSalary(e.target.value);
  }
  const addWorkerHandler = (e) => {
      e.preventDefault();
      setWorkerName("");
      setSalary("");
      console.log(workerName,salary);
  }

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan ismi
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışan ismi yazınız."
          id="name"
          onChange={workerNameChangeHandler}
          value={workerName}
        />
        <label htmlFor="salary" className="font-medium">
          Maaş miktarı
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız."
          id="salary"
          onChange={salaryChangeHandler}
          value={salary}
        />
        <Button className="mt-2">Ekle</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
